const mongoose = require('mongoose')
const model = require('./course.model')

mongoose.connect('mongodb://localhost:27017/EdurekaCoursesDB', {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('Successfully Established Connections with MongoDB')
    } else {
        console.log('Failed to Established Connection with MongoDB with Error: '+err)
    }
})