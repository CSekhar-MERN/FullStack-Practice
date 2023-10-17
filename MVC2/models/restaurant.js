const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name: String,
    city: String,
    location_id: String,
    city_id: String,
    locality: String,
    thumb: Array,
    aggregate_rating: String,
    rating_text: String,
    min_price: String,
    contact_number: String,
    cuisine: Array,
    mealtype_id: String
  })

  const Restaurant = mongoose.model('Restaurant', restaurantSchema)
// console.log(Restaurant);


module.exports = Restaurant;