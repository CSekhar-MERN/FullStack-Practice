const express = require('express')
const mongoose = require('mongoose');
const UserModel = require('./models/user');
const UserRouter = require('./routes/route')

const app= express()
app.use('/user', UserRouter)


// Database Connection
const uri = 'mongodb://127.0.0.1/crudOperation';

mongoose.connect(uri, {
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


//   Inserting data in database
//   const data =new UserModel({
//     name: 'Chandra sekhar',
//     email: 'asfafa@gmail.com',
//     mobile: 8795462130
//   });
//   data.save();

//   setTimeout(()=>{
//     console.log('set time out started')
//     UserModel.findOne({name: 'Chandra sekhar'})
//   }, 2000)

// const data = new UserModel({
//     name: 'Chandra sekhar',
//     email: 'asfafa@gmail.com',
//     mobile: 8795462130
// });

// // Save the new user to the database using await
// async function run() {
// const savedUser = data.save();
// console.log('User saved successfully:', savedUser);
  
//     // Find the user using await without any delay
//     const foundUser = await UserModel.findOne({ name: 'Chandra sekhar' });
//     console.log('Found user:', foundUser);
//   }
  
//   run();
  



app.listen(3000, ()=>{
    console.log('Serve is listening on port: 3000')
})