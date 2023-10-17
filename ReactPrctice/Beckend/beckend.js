const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const PORT = 3030;
const form = require('./Model/form')


const uri = "mongodb://127.0.0.1/signup";

mongoose.connect(uri, {
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true,
//   useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});


const app = express();
// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // Parse JSON request bodies


app.post('/submit', async(req, res) =>{
    try {
        const formData = req.body;
        const savedForm = await form.create(formData);
        res.json(savedForm); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
});


app.listen(PORT, ()=>{
    console.log(`Serve listning at ${PORT}`)
})