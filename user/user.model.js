// mongoose user schema should have:  name, email, password

// import mongoose
const mongoose = require('mongoose');
// create user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});
// create user model
const User = mongoose.model('User', userSchema);

// export user 
module.exports = User;


