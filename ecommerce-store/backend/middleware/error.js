const Errorhandler = require('../utils/errorhandler')

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500,
    err.message = err.message || "Internal server error" 

    // Wrong mongodb Id error

    if(err.name === "CastError"){
        const message= `resource not found, Invaid ${err.path}`
        err = new Errorhandler(message, 400)
    }

    res.status(err.statusCode).json({
        success : false,
        message :err.message

    })
}