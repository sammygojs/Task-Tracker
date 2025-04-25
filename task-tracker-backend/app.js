const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ADD THIS LINE:
const taskRoutes = require('./src/routes/taskRoutes'); // adjust the path if needed
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('API is running!');
});

module.exports = app;
