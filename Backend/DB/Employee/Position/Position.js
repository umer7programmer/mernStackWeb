const mongoose=require('mongoose');
const positionAddSchema= new mongoose.Schema({
    position:String
})
module.exports=mongoose.model("positionAdd",positionAddSchema);
