const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

const client = new Client(process.env.DATABASE_URL);

client.connect(); 

client.on('error', (err) => {
  console.error('Connection error: ${error}');
});

client.once('open', () => {
  console.log('Connection successful');

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
