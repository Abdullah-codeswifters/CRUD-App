// require('dotenv').config(); // Added dotenv to access .env variables
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const blogRoutes = require('./Routes/BlogRoutes');
// const authRoutes = require('./Routes/AuthRoutes'); // Uncommented and added this

// const app = express();
// const port = process.env.PORT || 3001; // Updated to use .env variable

// mongoose.connect(process.env.MONGO_URI) // Updated to use .env variable
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// app.use(bodyParser.json());

// app.use('/api/auth', authRoutes); // Uncommented and added this
// app.use('/api/blogs', blogRoutes);

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });