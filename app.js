const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3030;
var mainRouter = require("./api/index");
var bus = require('./api/bus');
var email = require("./api/email");
app.listen(port,(err)=>{
    if(!err){
        console.log("Successful");
    }
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect("mongodb://kumol:kumol254@ds153906.mlab.com:53906/blog",(err)=>{
    if(!err){
        console.log("database connection successful");
    }
    else{
        console.log(err);
    }
})
app.use("/api",mainRouter);
app.use("/bus",bus);
app.use("/email",email);