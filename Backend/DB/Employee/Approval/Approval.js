
const mongoose=require('mongoose');
const approvalAddSchema=new mongoose.Schema({
    estimateNumber:Number,
      estimateDate:Date,
    dueDate:Date,
    totalValue:Number,
    sender:String,
    tags:[String],
    status:Boolean
})
module.exports=mongoose.model("approvalAdd",approvalAddSchema)