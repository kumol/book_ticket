const express = require("express");
const app = express();
const cntlr = require("./controller");
const router = express.Router();
const mongoose = require("mongoose");
var Ticket = require("../models/seat");
var Bus = require("../models/bus");
router.post("/bus",(req,res,next)=>{
    var bus = new Bus();
    bus.save().then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        res.status(500).json(err);
    })
});
router.post("/ticket",(req,res,next)=>{
    var ticket = new Ticket();
    ticket.name = null;
    ticket.number = null;
    ticket.count = null;
    ticket.status = true;
    ticket.save().then((result)=>{
        console.log("success");
        res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
    })
});

module.exports = router;