const mongoose=require('mongoose');
const matchingAddSchema=new mongoose.Schema({
    source:String,
    present:String
})
module.exports=mongoose.model("matchingAdd",matchingAddSchema);