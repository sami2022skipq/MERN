const express = require('express')
const app = express()

const  product  = require('./routes/productsRoute')
const user=  require('./routes/userRoute')
const errorMiddleware =require('./middleware/error')

app.use(express.json())

app.use("/api/v1", product)
app.use("/api/v1", user)

// Error Middleware

app.use(errorMiddleware)





module.exports = app