const mongoose = require("mongoose");
const ticketSchema = mongoose.Schema({
    bus : {type : String },
    name : {type : String },
    number :{type : String },
    count : {type : Number },
    status : {type : Boolean},
    displayName : {type : String },
    passenger : {type :String}
});
module.exports = mongoose.model("Ticket",ticketSchema);