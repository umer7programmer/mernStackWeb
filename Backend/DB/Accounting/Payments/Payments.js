const mongoose=require('mongoose');
const paymentsAddSchema=new mongoose.Schema({
    estimateNumber:Number,
  totalvalue:Number,
    estimateDate:Date,
    dueDate:Date,
    status:Boolean,
    senderName:String,
  tags:[String],
  
   
})
module.exports=mongoose.model("paymentsAdd",paymentsAddSchema)