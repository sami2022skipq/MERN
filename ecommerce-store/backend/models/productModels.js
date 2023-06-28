const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: {
        type: String,required: [true, "Please enter product Name"],trim: true
    },

    discription: {
        type: String,required: [true, "Please enter product Discription"]
    },
    price: {
        type: Number,required: [true, "Please enter product Price"],maxLength: [8, "Price cannnot exceede 8 characters"]

    },
    rating: {
        type: Number,default: 0
    },
    images: [
        {
            public_id: {type: String,required: true},
            url: {type: String,required: true}
        }
    ],
    category: {
        type: String,required: [true, "Please enter category"]
    },
    stock: {
        type: Number,maxLength: [4, "Stock cannot exceede 4 characters"],default: 1
    },
    numberOfReviews: {
        type: Number,default: 0

    },
    reviews: [
        {
            name: {type: String,required: true},
            ratting: {type: Number,required: true},
            comment: {type: String,required: true}
        }
    ],
    createdAt: {
        type: Date,default: Date.now
    }


});
module.exports = mongoose.model("Product", productSchema)