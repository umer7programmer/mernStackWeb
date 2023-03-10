const mongoose=require('mongoose');
const employeeLevelSchema= new mongoose.Schema({
    employeeLevel:String
})
module.exports=mongoose.model("employeeLevel",employeeLevelSchema);
