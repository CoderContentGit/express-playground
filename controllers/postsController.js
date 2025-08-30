import posts from "../models/posts.js";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 5;

export const getPosts = (req, res) => {
  const page = Math.max(parseInt(req.query.page) || DEFAULT_PAGE, 1);
  const limit = Math.max(parseInt(req.query.limit) || DEFAULT_LIMIT, 1);

  const total = posts.length;
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.min(page, totalPages);

  const start = (currentPage - 1) * limit;
  const end = start + limit;
  const data = posts.slice(start, end);

  res.json({
    data,
    meta: {
      total,
      page: currentPage,
      limit,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
    },
  });
};
