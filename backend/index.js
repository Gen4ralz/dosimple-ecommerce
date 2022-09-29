const express = require('express');
const app = express();
const env = require('./config/envConfig');
const connect = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

// database connection
connect();
app.use(cors());

//add middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to dosimple!' });
});

//user routes
app.use('/api', userRoutes);

//category routes
app.use('/api', categoryRoutes);

app.use('/api', productRoutes);

const port = env.PORT || 5000;
app.listen(port, () => {
  console.log(`Your server is running at port number: ${port}`);
});
