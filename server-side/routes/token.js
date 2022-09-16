const jwt = require("jsonwebtoken")

const verifyTokenAndAuthorization = (req,res, next) =>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }
        else {
            res.status(403).json("You are not allowed to do that!")
        }
    })
}


const verifyTokenAndSeller = (req,res, next) =>{
    verifyToken(req,res,()=>{
        if(req.user.isSeller){
            next()
        }
        else {
            res.status(403).json("Only a seller can Upload!")
        }
    })
}

const verifyTokenAndAdmin = (req,res, next) =>{
    verifyToken(req,res,()=>{
        if(req.user.isSeller){
            next()
        }
        else {
            res.status(403).json("Only an Admin can do that!")
        }
    })
}

module.exports = { verifyTokenAndAuthorization, verifyTokenAndSeller, verifyTokenAndAdmin }