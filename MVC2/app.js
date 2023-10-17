const express = require('express')
const bodyParser = require('body-parser')
const router = require('./controller/route')
const port = 5000;

const app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))


app.listen(port)
console.log(`Server is listening at port no ${port}`)