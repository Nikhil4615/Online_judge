const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
        unique : true,
        },
        email:{
            type : String,
            unique: true,
            required : true,
        },
        password :{
            type: String,
            required : true,
        },
        isadmin :{
            type : Boolean,
            default : false,
        },
})

const User = mongoose.model('User',userSchema);

module.exports =User;