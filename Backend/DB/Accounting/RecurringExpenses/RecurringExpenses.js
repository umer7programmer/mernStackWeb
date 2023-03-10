const mongoose=require('mongoose');
const recurringExpensesAddSchema=new mongoose.Schema({
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
    },
    status:Boolean,
    sender:String,
    totalValue:Number
})
module.exports=mongoose.model("recurringExpensesAdd",recurringExpensesAddSchema)