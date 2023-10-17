const mongoose = require('mongoose')


// Database Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        CamelCase: true
    },
    email: {
      type:String,
      required: true,

    },
    mobile: {
    type:Number,
    default: 1234567890
    }


},{
    versionKey : false
})


// Database Schema's Model
const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;