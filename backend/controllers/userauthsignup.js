const User =require('../models/usermodel.js');
const bcryptjs = require('bcryptjs');
const errorhandler = require('../utils/error.js');
const signup = async (req,res,next) =>{
    const {username,email,password} =req.body;

    if(username === '' || password === '' || email === ''){
        next(errorhandler(400,'All fields are required.'));
        // const err = next(errorhandler(400,"All fields are required."));
        // console.log(err);
    }

    const hashedpass = bcryptjs.hashSync(password,10);
    const newUser = new User({
        username,
        email,
        password:hashedpass,
    })

    try {
        await newUser.save();
        res.send("signup successful.");
    } catch (error) {
        next(error);
    }


}

module.exports = signup;