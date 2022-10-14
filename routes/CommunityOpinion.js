var express = require('express');
var router = express.Router();
const {CommunityOpinion} = require("../Models/CommunityOpinion")
router.get('/api/v1/comunity-options', function(req, res, next) {
    CommunityOpinion.find({},(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err);
        }
    })
});

module.exports = router;
