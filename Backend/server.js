const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000

const Index = require("./Routes/Index")
const app = express()


app.use("/api/v1/users" , Index)


app.listen(port, ()=>console.log(`Server ishga tushdi >>>  port : ${port}`))