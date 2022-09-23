const express = require('express');
const app = express();
const env = require('./config/envConfig');
const connect = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// database connection
connect();

//add middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to dosimple!' });
});

//user routes
app.use('/api', userRoutes);

const port = env.PORT || 5000;
app.listen(port, () => {
  console.log(`Your server is running at port number: ${port}`);
});
