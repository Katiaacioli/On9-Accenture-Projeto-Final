const mongoose = require('mongoose')
const { Schema } = mongoose

const catSchema = new Schema({
    responsible: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    contact: { type: Number, required: true },
    hashPass: { type: String, required: true },
    city: { type: String, required: true },
    neighborhood: { type: String, required: true },
    nicknameCat: { type: String, required: true },
    characters: { type: String, required: true },
    available: { type: Boolean, default: true }
},
    { timestamps: true })

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat