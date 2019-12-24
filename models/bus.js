const mongoose = require("mongoose");
const busSchema = mongoose.Schema({
    seat: { type : String },
    date : {type : Date },
    time : { type : Date },
    image : { type : String }
});
module.exports = mongoose.model("Bus",busSchema);