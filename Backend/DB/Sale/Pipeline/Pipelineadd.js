const mongoose=require('mongoose');
const pipelineAddSchema=new mongoose.Schema({
    estimateNumber:Number,
    contact:String,
    estimateDate:Date,
    dueDate:Date,
    currency:String,
    term:String,
    tags:[String],
    estimateType:[String],
    discountType:String,
    taxes:{
        discountValue:Number,
        discountType:String
    }
})
module.exports=mongoose.model("pipelineAdd",pipelineAddSchema)