async function searchDatabase(query) {
  // Simulate a database search with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ results: [`Result for ${query}`] });
    }, 5000); // Simulate 100ms delay
  });
}

module.exports = searchDatabase;
