const mongoose = require("mongoose");
const busSchema = mongoose.Schema({
    seat: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" , default:"5dd453128c930e4846b3a077", required:true}],
    date : {type : Date },
    time : { type : Date },
    image : { type : String }
});
module.exports = mongoose.model("Bus",busSchema);