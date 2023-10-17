const express = require("express");
const mongoose = require("mongoose");
const Student = require("./model/students");
const port = 60000;

const url = "mongodb://127.0.0.1/school";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;
database.on(
  "error",
  console.error.bind(console, "Connection error in Database")
);
database.once("open", () => {
  console.log("Database Connected");
});

// const user =  new Student({
//     name: 'Sekhar',
//     age: '21',
//     city: 'Jaipur',
// })
// user.save(function(err, result){
//     console.log(result._id)
// });
// Student.insertOne([{

// }]).then(data=>{
//     console.log(data, 'is inserted')
// })

const entry = new Student({ name: "Sekhar", age: "21", city: "Jaipur" });
entry.save()

const app = express();

app.listen(port, () => {
  console.log("Server is started at " + port);
});  
