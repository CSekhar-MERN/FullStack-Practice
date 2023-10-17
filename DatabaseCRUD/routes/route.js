const express = require('express')
const router = express.Router();
const UserControllers = require('../Controller/user.controller')


router.get('/create', UserControllers.CreateUser)

module.exports = router;