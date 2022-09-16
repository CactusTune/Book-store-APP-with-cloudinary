const router = require('express').Router()
const Cart = require('../models/Cart')
const {verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./token')


//CREATE A NEW CART
router.post('/', verifyTokenAndAuthorization, async (req,res)=>{
    const newCart = new Cart(req.body)

    try{
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//UPDATE A CART
router.put("/:id", verifyTokenAndAuthorization, async (req,res)=>{

    try{
        const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id, 
        {
        $set: req.body
        },
        {new : true}
    );
    res.status(200).json(updatedCart)

    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE A CART
router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted!...")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET USER CART
router.get("/find/:userId", async (req,res)=>{
    try{
        const cart = await Cart.findOne({userId : req.params.userId})
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL CARTS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
   try{
    const cart = await Cart.find(req.body)
    res.status(200).json(orders)
   }
   catch(err) {
    res.status(500).json(err)
   }
});


module.exports = router