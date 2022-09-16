const router = require('express').Router()
const Order = require('../models/Order')
const {verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyTokenAndSeller } = require('./token')


//CREATE A NEW ORDER
router.post('/', verifyTokenAndAuthorization, async (req,res)=>{
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//UPDATE AN ORDER
router.put("/:id", verifyTokenAndAuthorization, async (req,res)=>{

    try{
        const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id, 
        {
        $set: req.body
        },
        {new : true}
    );
    res.status(200).json(updatedOrder)

    }catch(err){
        res.status(500).json(err)
    }
})

//DELETE AN ORDER
router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted!...")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET USER ORDER
router.get("/find/:userId", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const orders = await Order.find({userId : req.params.userId})
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
   try{
    const orders = await Order.find(req.body)
    res.status(200).json(orders)
   }
   catch(err) {
    res.status(500).json(err)
   }
});
  
module.exports = router