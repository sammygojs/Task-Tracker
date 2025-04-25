const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API is running!');
});

const mongoose = require('mongoose');
const taskRoutes = require('./src/routes/taskRoutes');

// Connect to MongoDB (replace the string with your MongoDB connection URI)
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/taskdb')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use(taskRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing
