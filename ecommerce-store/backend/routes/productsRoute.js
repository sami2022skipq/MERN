const express = require('express')
const { getAllProducts, createProduct, updateProduct,deleteProduct ,getProductDetail} = require('../controller/productController')


const router = express.Router()

router.get("/products", getAllProducts)  // get all products
router.post("/products/new", createProduct) // add a new product    
router.put("/product/:id", updateProduct)  // update a product
router.delete("/product/:id", deleteProduct) // delete a product
router.get("/product/:id", getProductDetail) // Get produc detail 

module.exports = router