# Express Playground

A simple Express.js application for testing and experimentation.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

   Or for development:
   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:3000`

## Available Routes

- `GET /` - Welcome message with timestamp
- `GET /health` - Health check endpoint
- `GET /api/hello` - Greeting API (accepts optional `name` query parameter)
  - Example: `http://localhost:3000/api/hello?name=John`

## Project Structure

```
express-playground/
├── index.js          # Main Express server file
├── package.json      # Project configuration and dependencies
├── .gitignore       # Git ignore rules
└── README.md        # This file
```

## Development

The server runs on port 3000 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Adding New Routes

Add new routes in `index.js`. Example:

```javascript
app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});
```

Happy coding! 🚀
