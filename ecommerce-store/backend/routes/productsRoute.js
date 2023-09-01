const express = require('express')
const { getAllProducts, createProduct, updateProduct,deleteProduct ,getProductDetail} = require('../controller/productController')


const router = express.Router()


router.route('/products').get(getAllProducts)  // get all products

router.route('/products/new').post(createProduct) // add a new product    
router.route('/product/:id').put( updateProduct).delete(deleteProduct).get(getProductDetail)// update a product, delete, get details o


module.exports = router