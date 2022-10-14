const mongoose = require("mongoose")


const CommunityOpinion = mongoose.model('CommunityOpinion',{
    name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
})


module.exports = {CommunityOpinion}