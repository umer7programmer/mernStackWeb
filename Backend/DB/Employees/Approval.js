const mongoose=require('mongoose');
const approvalSchema=new mongoose.Schema({
    estimateNumber:Number,
    estimateDate:Date,
    dueDate:Date,
    totalValue:Number,
    sender:String,
    tag:String,
    status:Boolean

})
module.exports=mongoose.model('approval',approvalSchema);