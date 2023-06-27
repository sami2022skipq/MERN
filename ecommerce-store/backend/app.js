const express = require('express')
const app = express()

const  product  = require('./routes/productsRoute')

app.use(express.json())

app.use("/api/v1", product)



module.exports = app