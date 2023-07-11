const app = require('./app')
const dotenv= require('dotenv')
const connectDB = require('../backend/config/database')
// Handeling uncaught exception
process.on("uncaughtException", err=>{
    console.log(`Error ${err.message}`)
    console.log("Shutting down the server due to uncaught exception")
    process.exit(1)
})
//config
dotenv.config({path:"../backend/config/config.env"})
connectDB()

const server =app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
process.on("unhandledRejection", err =>{
    console.log(`Error ${err.message}`)
    console.log("Shutting down the server due to unhandeled promise rejection")
    server.close(()=>process.exit(1))
    
})