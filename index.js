import express from 'express';
import postsRouter from "./routes/posts.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/posts", postsRouter);

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Express server is running on http://localhost:${PORT}`);
});

module.exports = app;
