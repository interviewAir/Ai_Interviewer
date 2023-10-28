const express = require('express');
const app = express();
const PORT = require('./port');
const r = require('./route');

function error(err, req, res, next) {
  console.error(err);
  res.status(500).type('html')
    .send(`<html>
  <head>
  <title>Error: ${err.message}</title>
  </head>
  <body>
  <div>
  <h2>${err.toString()}</h2>
  <pre>
  <code>${err.stack}</code>
  </pre>
  </div>
  </body>
  </html>`)
}


// Entry point for backend

const { MongoClient } = require('mongodb');
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.use('/', r);
app.use(error);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
