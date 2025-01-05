// require('dotenv').config(); // Added dotenv to access .env variables
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../Models/UserModel');

// const signup = async (req, res) => {
//   const { name, email, password, status } = req.body;
  
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });
    
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       status,
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     if (user.status !== 'active') return res.status(400).json({ message: 'Activate your account' });

//     const token = jwt.sign(
//       { id: user._id, email: user.email, name: user.name },
//       process.env.JWT_SECRET_KEY, // Updated to use .env variable
//       { expiresIn: process.env.JWT_EXPIRATION } // Updated to use .env variable
//     );

//     res.json({
//       userDetails: { name: user.name, email: user.email, status: user.status },
//       token,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { signup, login };
