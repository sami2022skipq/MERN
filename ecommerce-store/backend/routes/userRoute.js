
const express = require('express')
const { registerUser, getUsers} = require('../controller/userController')

const router = express.Router()


router.route('/register').post(registerUser) 
router.route('/getusers').get(getUsers) 


module.exports = router