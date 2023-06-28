const app = require('./app')
const dotenv= require('dotenv')
const connectDB = require('../backend/config/database')
//config

dotenv.config({path:"backend/config/config.env"})
connectDB()

app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})