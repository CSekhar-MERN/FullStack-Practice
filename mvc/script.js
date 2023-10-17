const model = require('./models/mongodb')
const express = require('express')
var app = express();
const path = require('path');
const exphb = require('express-handlebars')
const bodyParser = require('body-parser')
const courseController = require('./controllers/courseController')

app.use(bodyParser.urlencoded({extended:true}));

//Create a welcome message and direct them to the main page
app.get('/', (req, res)=>{
    res.send('<h2>Welcome to Edureka Nodejs MongoDB Tutorial</h2> <br> Click here to go <b> <a href="/course">Course Page</a></b>')
});

app.use(bodyParser.json());

// Configure Express middleware for the handlebars
app.set('views',path.join(__dirname,'/views'));

app.engine('hbs', exphb({extname:'hbs',defaultLayout:'mainLayout',layoutDir:__dirname+'views/layouts/'}));

// Establish the server connection
// PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));

// Set the controller path which will be responding the user actions
app.use('/course', courseController);