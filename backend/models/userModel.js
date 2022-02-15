const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User cannot be empty']
  },
  email: {
    type: String,
    required: [true, 'Email cannot be empty'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty']
  },
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)