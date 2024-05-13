// users.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: false },
  password: { type: String, required: true, minlength: 5 } 
});

const UserModel = mongoose.model('User', userSchema);

module.exports = {UserModel};
