const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mailSchema = new Schema({
    email: {
        required: true,
        type: String,
    },
    subject: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Mail', mailSchema)