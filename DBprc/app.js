const express = require('express')
const mongoose = require('mongoose')
const port = 8000;

const app = express();


//Database Connection
const uri = 'mongodb://127.0.0.1/REST';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const database = mongoose.connection;
database.on('error',
console.error.bind(console, 'Connection Error in Database'));
database.once('open',()=>{
    console.log(('Database Connected'))
});

//Schema
 const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
 })

 //Model
 const ProductModel = mongoose.model('product', productSchema);

//Routes
app.get('/', (req, res)=>{
    res.send('<h1>Hello Home</h1>')
})

app.get('/products', async(req, res)=>{
const data = await ProductModel.find({})
console.log(data)
res.json(data)
})

app.listen(port, ()=>{
    console.log(`Server is running on Port ${port}`);
})