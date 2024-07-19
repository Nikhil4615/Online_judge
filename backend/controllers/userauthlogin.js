const User = require('../models/usermodel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const errorhandler =require('../utils/error.js');
const JWT_SECRET = 'your_jwt_secret_key';

const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            next(errorhandler(404,"User not found"));
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            next(errorhandler(400,"Invalid login credentials"));
        }
        const token = jwt.sign(
            { id: user._id, username: user.username },
            JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.json({ message: 'Login successful', token });
    } catch (error) {
        next(error);
    }
};

module.exports = login;
