const express = require("express");
const router = express.Router();
const dataAPi = require("../../api/db")
console.log(dataAPi);


router.get("/" , (req,res)=>{
    res.status(200).json(dataAPi)
})

router.post("/" , (req,res)=>{
    res.status(200).json({message:"Set user"})
})

router.put("/:id" , (req,res)=>{
    res.status(200).json({message: `Update user ${req.params.id}`})
})
router.delete("/:id" , (req,res)=>{
    res.status(200).json({message: `Delete user ${req.params.id}`})
})

module.exports = router