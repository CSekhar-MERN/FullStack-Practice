// Import the Dependencies
const express = require('express')
const mongoose = require('mongoose');
const { inspect } = require('util');
// Creating a Router
var router = express.Router();
// Link
const Course = mongoose.model('Course');

// Router Controller for READ request
router.get('/', (req, res) => {
    res.render('course/courseAddEdit',{
        viewTitle:'Insert a New Course for Edureka'
    });
});

// Router Controller for UPDATE request
router.post('/',(req, res) => {
    if(req.body._id == '')
    insertIntoMongoDB(req, res);
    else
    updateIntoMongoDB(req, res);
});

// Creating function to insert data into MongoDB
function insertIntoMongoDB(req, res){
    var course = new Course();
    course.courseName = req.body.courseName;
    course.courseId = req.body.courseId;
    course.courseDuration = req.body.courseDuration;
    course.courseFee = req.body.courseFee;

    course.save((err, doc) => {
        if(!err)
        res.redirect('course/list');
        else
        console.log('Error during record insertion: '+err);
    });
}

// Creating function to Update data into MongoDB
function updateIntoMongoDB(req, res){
    Course.findOneAndUpdate({_id: req.body._id}, req,body,{new:true}, (err, doc)=> {
        if(!err){
            res.redirect('course/list')
        } else {
            if(err.name == 'ValidationError'){
                handleValidationError(err, req.body);
                res.render('course/courseAddEdit', {
                    // Retaining value to be displayed in the child view
                    viewTitle: 'Update Course Details',
                    employee: req.body
                });
            }
            else 
            console.log('Error during updating the record: '+err);
        }
    });
}

//Router to retrieve the complete list of availavble courses
router.get('/list', (req,res) => {
    Course.find((err, docs) => {
    if
    res.render("course/list", {
    list: docs
    });
    }
    else {
    console.log('Failed to retrieve the Course List: '+ err);
    }
    });
    