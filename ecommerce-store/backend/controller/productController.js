const Product = require('../models/productModels')


// Create a new Product   -- admin
exports.createProduct = async (req, res, next) => {

     const product = await Product.create(req.body)
     res.status(201).json(
          {
               success: true,
               msg: product
          }
     )
}
// Update a Product  -- admin

exports.updateProduct = async (req, res, next) => {
     let product = await Product.findById(req.params.id)
     if (!product) {
          res.status(500).json({
               success: false,
               message: "Product not found "
          })
     }
     product = await Product.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false
     })
     res.status(200).json({
          success: true,
          product
     })

}
// Get all Products  -- all
exports.getAllProducts = async (req, res) => {

     const products = await Product.find()
     res.status(200).json({

          success: true,
          products

     })
}
// Delete a product  -- Admin

exports.deleteProduct = async (req, res, next) => {
     const product = await Product.findById(req.params.id)
     if (!product) {
          res.status(500).json({
               success: false,
               message: "Product not found "
          })
     }
     await Product.findByIdAndDelete(req.params.id)

     res.status(200).json({
          success: true,
          message: `Product  with the Id :${req.params.id} has been deleted `
     })
}
// Get product  detail  -- Admin

exports.getProductDetail = async (req, res, next) => {
     const product = await Product.findById(req.params.id)
     if (!product) {
          res.status(500).json({
               success: false,
               message: "Product not found "
          })
     }
     

     res.status(200).json({
          success: true,
          product
     })
}

