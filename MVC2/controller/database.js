const express = require("express");
const mongoose = require("mongoose");
const Restaurant = require('../models/restaurant')
const Meal_type = require('../models/meal')
const locationSchema = new mongoose.Schema({
  name: String,
  city_id: String,
  location_id: String,
  city: String,
  country_name: String,
});
// const restaurantSchema = new mongoose.Schema({
//   name: String,
//   city: String,
//   location_id: String,
//   city_id: String,
//   locality: String,
//   thumb: Array,
//   aggregate_rating: String,
//   rating_text: String,
//   min_price: String,
//   contact_number: String,
//   cuisine: Array,
//   mealtype_id: String
// })

// const Restaurant = mongoose.model('Restaurant', restaurantSchema)
// console.log(Restaurant);

const connecDB = async () => {
    try{
        const conn = mongoose.connect("mongodb://127.0.0.1:27017/zomato")
    console.log("Connections established to DatabaseZomato");
    const locations = mongoose.model('locations', locationSchema)
    console.log(locations.collection.collectionName)
    const loc = await locations.find({});
    const restro = await Restaurant.find({})
    const meal = await Meal_type.find({})
    // console.log(restro);
    // console.log(loc)
    // console.log(meal)
    return loc, restro, meal;
  }
  catch(err) {
    console.log("Error in connection is : " + err);
    process.exit(1)
  }
};

exports.connecDB = connecDB;
  