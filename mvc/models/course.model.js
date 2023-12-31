const mongoose = require('mongoose');
var courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: 'This field is required!'
    },
    courseId:{
        type: String
    },
    courseDuration:{
        type:String
    }, 
    courseFee: {
        type: String
    }

});

mongoose.model('Course', courseSchema);