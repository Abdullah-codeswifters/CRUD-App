// require('dotenv').config(); // Added dotenv to access .env variables
// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   const token = req.header('Authorization')?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Access denied. No token provided' });

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET_KEY); // Updated to use .env variable
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid token' });
//   }
// };

// module.exports = authenticateToken;

