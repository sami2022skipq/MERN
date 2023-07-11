const Product = require('../models/productModels')
const Errorhandler = require('../utils/errorhandler')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ApiFeatures = require('../utils/apiFeatures')


// Create a new Product   -- admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

     const product = await Product.create(req.body)
     res.status(201).json(
          {
               success: true,
               msg: product
          }
     )
})
// Update a Product  -- admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
     let product = await Product.findById(req.params.id)
     if (!product) {
          return next(new Errorhandler("Product not found", 404))
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

})
// Get all Products  -- all
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

     const apiFeatures = new ApiFeatures(Product.find(), req.query).search()
     const products =await  apiFeatures.query

     res.status(200).json({

          success: true,
          products

     })
})
// Delete a product  -- Admin

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
     const product = await Product.findById(req.params.id)
     if (!product) {
          return next(new Errorhandler("Product not found", 404))
     }

     await Product.findByIdAndDelete(req.params.id)

     res.status(200).json({
          success: true,
          message: `Product  with the Id :${req.params.id} has been deleted `
     })
})
// Get product  detail  -- Admin

exports.getProductDetail = catchAsyncErrors(async (req, res, next) => {
     const product = await Product.findById(req.params.id)
     if (!product) {
          return next(new Errorhandler("Product not found", 404))
     }


     res.status(200).json({
          success: true,
          product
     })
})

