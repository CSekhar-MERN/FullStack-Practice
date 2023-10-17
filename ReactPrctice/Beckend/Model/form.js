const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
})

const form = mongoose.model('form', formSchema)
module.exports = form;