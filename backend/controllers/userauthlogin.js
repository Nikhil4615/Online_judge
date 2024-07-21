const User = require('../models/usermodel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const errorhandler = require('../utils/error.js');

// Use environment variable for JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return next(errorhandler(404, "User not found"));
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return next(errorhandler(400, "Invalid login credentials"));
        }

        // Generate JWT token with user details including isAdmin
        const token = jwt.sign(
            { id: user._id, username: user.username, isAdmin: user.isAdmin },
            JWT_SECRET,
        );

        // Respond with success message and token
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        next(error);
    }
};

module.exports = login;
