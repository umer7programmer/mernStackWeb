const mongoose=require('mongoose');
const salesPaymentsAddSchema=new mongoose.Schema({
    estimateNumber:Number,
  totalvalue:Number,
    estimateDate:Date,
    dueDate:Date,
    status:Boolean,
    senderName:String,
  tags:[String],
  
   
})
module.exports=mongoose.model("salesPaymentsAdd",salesPaymentsAddSchema)