const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    name :{
        type:String, require :true, maxLength :[30,"Name cannot exceed 30 characters"], minLength:[5,"Name must be atleast 5 characters"]
    },

    email :{
        type:String, require :true,validate:[validator.isEmail, "Please enter a valid email"] , unique: true
    },
    password :{
        type:String, require: [true, "Please enter your password"], minLength :[8, "Password must be of atleast 8 characters" ], select:false
    },
    avatar:{
        public_id: {type: String,required: true},
        url: {type: String,required: true}
    }, 
    role:{
        type:String, default:"user"
    },
    resetPasswordString: String,
    resetPasswordExpire : Date

})
module.exports = mongoose.model("User", userSchema)