const mongoose=require('mongoose');
const employeeAddSchema=new mongoose.Schema({
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
module.exports=mongoose.model("employeeAdd",employeeAddSchema)