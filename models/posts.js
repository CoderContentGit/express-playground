const posts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Post ${i + 1}`,
}));

export default posts;
