const express = require('express')
const app = express()

const  product  = require('./routes/productsRoute')
const errorMiddleware =require('./middleware/error')

app.use(express.json())

app.use("/api/v1", product)

// Error Middleware

app.use(errorMiddleware)





module.exports = app