const mongoose = require('mongoose')

const newCitySchema = new mongoose.Schema({
    city: String,
  
})

const NewCity= mongoose.model('NewCity', newCitySchema)
// console.log(Meal_type)

module.exports = NewCity;