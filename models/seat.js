const mongoose = require("mongoose");
const ticketSchema = mongoose.Schema({

    name : {type : String },
    number :{type : String },
    count : {type : Number },
    status : {type : Boolean}
});
module.exports = mongoose.model("Ticket",ticketSchema);