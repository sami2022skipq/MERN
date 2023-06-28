const mongoose = require('mongoose')
const mongoURI ="mongodb://127.0.0.1:27017/Ecommerce"

const connectToMonggo =()=>{
    // 
    mongoose.connect(mongoURI)
    .then((data) => {
            console.log(`Connected to MongoDB at ${data.connection.host}` );
        },
        err => { 
            console.log('error: '+ err)
        }
    );
}

module.exports = connectToMonggo;