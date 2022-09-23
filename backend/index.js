const express = require('express');
const app = express();
const env = require('./config/envConfig');
const connect = require('./config/db');

// database connection
connect();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to dosimple!' });
});

const port = env.PORT || 5000;
app.listen(port, () => {
  console.log(`Your server is running at port number: ${port}`);
});
