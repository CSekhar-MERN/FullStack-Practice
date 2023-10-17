// jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 4000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.json());

// app.get('/api/v1/userdata', (req, res) => {
    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));

    // res.json({
    //     name: "Shekhar",
    //     email: "sample@mail.com",
    //     password: "hexed"
    // });
});

// app.post('/api/v1/register', (req, res) =>{

//     // res.send(`<h1>Hello Mr.${req.body.name}  your data is stored to our database, Thankyou.</h1>`)
//     // console.log(req.body)

//     const userName = req.body.name;
//     const userEmail = req.body.email;
//     const userPassword = req.body.password;

//     res.json({
//         success: true,
//         name: userName,
//         email: userEmail,
//         password: userPassword,
//     });
// });

app.listen(PORT, () =>{
    console.log(`Server is spinning on port : ${PORT}`);
});

