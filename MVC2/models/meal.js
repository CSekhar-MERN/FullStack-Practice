const mongoose = require('mongoose')

const mealTypeSchema = new mongoose.Schema({
    name: String,
    content: String,
    // image: File,
    meal_type: String
})

const Meal_type= mongoose.model('Meal_type', mealTypeSchema)
// console.log(Meal_type)

module.exports = Meal_type;