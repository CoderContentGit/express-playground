const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const redis = require("redis");
const searchDatabase = require("./service");

const redisClient = redis.createClient();
const ONE_HOUR = 3600;

app.use(express.json());

app.get("/search", async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: "Query parameter missing" });

  const key = "search:" + query.toLowerCase();
  let results = null;

  try {
    const value = await redisClient.get(key);
    if (value) {
      results = JSON.parse(value);
      console.log("Cache hit");
    } else {
      console.log("Cache miss");
      results = await searchDatabase(query);
      await redisClient.set(key, JSON.stringify(results), { EX: ONE_HOUR, NX: true });
    }

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

(async () => {
  try {
    redisClient.on("error", (err) => console.log("Redis Client Error", err));
    redisClient.on("ready", () => console.log("Redis client ready"));

    await redisClient.connect();
    console.log("Redis connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to Redis", err);
    process.exit(1);
  }
})();

module.exports = app;