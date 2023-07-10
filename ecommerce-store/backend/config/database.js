const mongoose = require('mongoose')

const connectToMonggo =()=>{
    // 
    mongoose.connect(process.env.mongoURI)
    .then((data) => {
            console.log(`Connected to MongoDB at ${data.connection.host}` );
        },
        err => { 
            console.log('error: '+ err)
        }
    );
}

module.exports = connectToMonggo;