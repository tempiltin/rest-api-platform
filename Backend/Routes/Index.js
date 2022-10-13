const express = require("express");
const router = express.Router();

const data =[
    {name:"https://www.youtube.com/watch?v=-0exw-9YJBo",age:25,years:2000},
    {name:"name",age:25,years:2000},
    {name:"name",age:25,years:2000},
    {name:"name",age:25,years:2000},
    {name:"name",age:25,years:2000},
    {name:"name",age:25,years:2000},
]

router.get("/" , (req,res)=>{
    res.status(200).json(data)
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