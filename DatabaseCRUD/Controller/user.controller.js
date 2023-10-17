// const express = require ('express')
// const UserModel = require('../models/user')
// const UserData = require('../db/data')

// const CreateUser = (req, res)=>{
//     // res.json({
//     //     message: 'Its working on controller',
//     //     status: 200,
//     // })

//     UserModel.create(UserData, (data)=>{
//         res.json({
//             data: data
//         })
//     })
// }


// module.exports = {CreateUser};



const express = require('express');
const UserModel = require('../models/user');
const UserData = require('../db/data');

const CreateUser = (req, res) => {
    UserModel.create(UserData)
        .then(data => {
            res.json({
                message: 'Data is submitted successfully',
                status: 200,
                data: data
            });
        })
        .catch(error => {
            res.status(500).json({
                error: 'An error occurred while creating the user.',
            });
        });
};

module.exports = { CreateUser };
