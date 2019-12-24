const mongoose = require("mongoose");
let memberSchema = mongoose.Schema({
    name:String,
    amount:Number,
    tMeal:Number,
});
module.exports = mongoose.model("Member",memberSchema);