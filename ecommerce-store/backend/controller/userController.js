const Errorhandler = require('../utils/errorhandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const User = require('../models/userModel')

// Registration 

exports.registerUser = catchAsyncErrors( async(req, res, next)=>{
    const {name, email, password} = req.body
    const user =  await User.create({name, email, password})
    
    const token = user.getJWTToken()

    res.status(201).json({
        success :true,
        token
    })
})
exports.getUsers =catchAsyncErrors(async(req, res, next)=>{
    const users = await User.find();
    res.status(200).json({
        success:true,
        users
    })
})