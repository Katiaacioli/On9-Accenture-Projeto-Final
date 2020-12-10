const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: Number, required: true },
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    city: { type: String, required: true }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User
