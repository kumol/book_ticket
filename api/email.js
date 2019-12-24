var express = require("express");
var app = express()
var router = express.Router();
const time = require('../models/time.json');
var mongoose = require('mongoose');
var EmailUser = require("../models/user");
//console.log(time);
// setTimeout(()=>{
//     console.log("hello world 1 min");
// },60000);
// setTimeout(()=>{
//     console.log("me 2 min");
// },120000);
// setTimeout(()=>{
//     console.log("me half min");
// },30000);
var region = "Asia"+"/"+"Dhaka";
var k = time[region];
console.log(k);
var st = k[1]+k[2]+"."+k[4]+k[5]
// for(var i=1 ,j=11;i<10;i++,j--){
//     console.log(i+" "+j);
//     setTimeout(()=>{
        
//     },j*1000);
//     console.log("count "+j,i);
// }

router.post("/mailall",(req,res,next)=>{
    EmailUser.find().then((user)=>{
        
    }).catch((err)=>{
        res.status(404).json({error:err});
    })
})
router.post("/adduser",(req,res,next)=>{
    var user = new EmailUser()
    user.name = req.body.name;
    user.email = req.body.email;
    user.region = req.body.continent+"/"+req.body.city;
    user.time = time[user.region];
    console.log(user);
    // user.save().then((user)=>{
    //     res.status(200).json({user:user});
    // }).catch((err)=>{
    //     res.status(404).json({error:err});
    // })
});

router.get("/user",(req,res,next)=>{
    EmailUser.find().then((user)=>{
        res.status(200).json({user:user});
    }).catch((err)=>{
        res.status(404).json({error:err});
    })
})
module.exports = router;