const express = require("express");
const router = express.Router();
router.get("/" , (req,res)=>{
    res.status(200).json(dataAPi)
})

router.post("/" , (req,res)=>{
    res.status(200).json({message:"Welcome to my api"})
})


module.exports = router