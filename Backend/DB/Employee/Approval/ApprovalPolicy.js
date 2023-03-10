const mongoose = require("mongoose");

const approvalPolicyAddSchema= new mongoose.Schema({
    name:String,
    description:String,
    defaultApprovalPolicy:String
})
module.exports=mongoose.model('approvalPolicy',approvalPolicyAddSchema)