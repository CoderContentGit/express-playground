import posts from "../models/posts.js";

export const getPaginatedPosts = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedPosts = posts.slice(start, end);

  res.json({
    data: paginatedPosts,
    total: posts.length,
    page,
    totalPages: Math.ceil(posts.length / limit),
  });
};
