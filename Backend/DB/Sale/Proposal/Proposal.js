const mongoose=require('mongoose');
const salesProposalAddSchema=new mongoose.Schema({
    author:String,
    template:String,
    contact:String,
    jobPostUrl:String,
    proposalDate:Date,
    estimateNumber:Number,
    
    estimateDate:Date,
    dueDate:Date,
    totalValue:Number,
    sender:String,
    tags:[String],
    status:Boolean
   

})
module.exports=mongoose.model("salesProposalAdd",salesProposalAddSchema)