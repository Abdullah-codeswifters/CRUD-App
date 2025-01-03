const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogRoutes = require('./Routes/BlogRoutes')
const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/CRUD')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/blogs', blogRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
