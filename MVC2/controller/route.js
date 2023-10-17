const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const conn = require("../controller/database");
const Restaurant = require("../models/restaurant");
const NewCity = require("../models/newCity");

const app = express();

router.get("/", function (req, res) {
  res.send("home");
});



// this is for day 75////////
router.get('/json', function(req, res){
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
  .then(res => res.json())
  .then(jsonData => {res.send(jsonData)})
  
})
////////////////////////

router.get("/getAllLocation", function (req, res) {
  conn.connecDB().then(function (foundItems) {
    console.log("foundItems",foundItems)
    res.render("location", { newItem: foundItems });
    res.send(foundItems)
    // console.log(foundItems)
    // console.log(foundItems.city)
  });
});
router.get("/getAllRestaurant", function (req, res) {
  conn.connecDB().then(function (restroItems) {
    // console.log("restroItems",restroItems)
    res.render("restaurant", { newItem: restroItems });
  });
});
// router.get("/getAllMeals", function (req, res) {
//   conn.connecDB().then(function (mealItems) {
//     res.render("meal", { newItem: mealItems });
//   });
// });

router.get("/getAllRestaurantByCity/:city", async function (req, res) {
  conn.connecDB().then(async function () {
    const { city } = req.params;
    const restro = await Restaurant.find({city: city});
    console.log(restro);
    // console.log(city);
    res.render('restaurant', restro)
  });
});
router.get("/getAllRestaurantById/:id", async function (req, res) {
  conn.connecDB().then(async function () {
    const { id } = req.params;
    const result = await Restaurant.findById(id);
    // console.log(result);
    // res.render('restaurant', {newItem: result})
  });
});

router.get('/city', function( res, req){
  conn.connecDB().then(async function () {
    const {data} = await NewCity.find()
    console.log(data.city)
  })
})

// status:"true"
// Message:"city data get succes"
// data:{data}

// router.get("/getResturant/:city", async function (req, res) {
//   conn.connecDB().then(async function () {
//     const { city } = req.params;
//    const result = Restaurant.find( { city: city } )
//     console.log(result);
//   });
// });


module.exports = router;
