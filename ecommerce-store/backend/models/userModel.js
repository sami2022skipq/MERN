const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


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
        public_id: {type: String},
        url: {type: String}
    }, 
    role:{
        type:String, default:"user"
    },
    resetPasswordString: String,
    resetPasswordExpire : Date
})
userSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)

})

userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRE
    })
}
module.exports = mongoose.model("User", userSchema)