const express = require('express')
const { getAllProducts, createProduct, updateProduct,deleteProduct } = require('../controller/productController')


const router = express.Router()

router.get("/products", getAllProducts)
router.post("/products/new", createProduct)
router.put("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)


module.exports = router