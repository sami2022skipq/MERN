const mongoose = require('mongoose')

const connectToMonggo =()=>{
    // 
    mongoose.connect(process.env.mongoURI)
    .then((data) => {
            console.log(`Connected to MongoDB at ${data.connection.host}` );
        }
    );
}

module.exports = connectToMonggo;