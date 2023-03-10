const EmployeeAdd=require('../DB/Job/Employee/Employee.js');
const ProposalTemplateAdd=require('../DB/Job/ProposalTemplate/ProposalTemplate.js');
const MatchingAdd=require('../DB/Job/Matching/Matching.js');
const BrowseAdd=require('../DB/Job/Browse/Browse.js')
//////////////////////////////jobSection/////////////////////////
/////////////////////////////employeeRecievedSection/////////////////////

const employeeRecieved=async(req,resp)=>{
    try{
       let employeeRecieved=await EmployeeAdd.find();
       if(employeeRecieved.length>0){
           resp.send(employeeRecieved);
   
       }
       else{
          resp.send({message:"No data in employee table"}) 
       }
    }
    catch(error){
       resp.send(error)
    }
   }
  ///////////////////////////////////////////employeeAdd////////////////////////////////////////////////////
  const employeeAdd = async (req, resp) => {
    const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes } = req.body;
    try {
      let employeeAdd = await new EmployeeAdd({
        estimateNumber,
        contact,
        estimateDate,
        dueDate,
        currency,
        term,
        tags,
        estimateType,
        discountType,
        taxes
  
      })
      let result = await employeeAdd.save();
      resp.send(result);
    }
    catch (error) {
      resp.send(error);
    }
  }
  ///////////////////////////////////////////////proposalTemplateRecieved//////////////////////////////////////////////////
const proposalTemplateRecieved = async (req, resp) => {


    try {
      let proposalTemplateRecieved = await ProposalTemplateAdd.find();
      if (proposalTemplateRecieved.length > 0) {
        resp.send(proposalTemplateRecieved);
      }
      else {
        resp.send("NO data in the proposalTemplate table");
  
      }
    }
    catch (error) {
      resp.send(error);
    }
  
  
  }
  ///////////////////////////////////////////propsalTemplateAdd////////////////////////////////////////////////////
  const propsalTemplateAdd = async (req, resp) => {
    const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes } = req.body;
    try {
      let propsalTemplateAdd = await new ProposalTemplateAdd({
        estimateNumber,
        contact,
        estimateDate,
        dueDate,
        currency,
        term,
        tags,
        estimateType,
        discountType,
        taxes
  
      })
      let result = await propsalTemplateAdd.save();
      resp.send(result);
    }
    catch (error) {
      resp.send(error);
    }
  }
////////////////////////////////////matchingRecieved//////////////////////////////
const matchingRecieved=async(req,resp)=>{
  try{
    let matchingRecieved=await MatchingAdd.find();
    if(matchingRecieved.length>0){
        resp.send(matchingRecieved);
    }
    else{
        resp.send("NO data in the matching table")

    }
  }
  catch(error){
    resp.send(error);
  }

}
/////////////////////////////////matchingAdd///////////////////////////////////////////////
const matchingAdd=async(req,resp)=>{
    const {source,present}=req.body;
    try{
        let matchingAdd= new MatchingAdd({
            source,
            present
        })
        let result=await matchingAdd.save();
        resp.send(result);
    }
    catch(error){
        resp.send(error);
    }
}
/////////////////////////////////browseSection/////////////////////////////////////////////////////////////
////////////////////////////////browseRecieved/////////////////////////////////////////////////////////////////
const browseRecieved = async (req, resp) => {


    try {
      let browseRecieved = await BrowseAdd.find();
      if (browseRecieved.length > 0) {
        resp.send(browseRecieved);
      }
      else {
        resp.send("NO data in the browse table");
  
      }
    }
    catch (error) {
      resp.send(error);
    }
  
  
  }
  ///////////////////////////////////////////browseAdd////////////////////////////////////////////////////
  const browseAdd = async (req, resp) => {
    const { estimateNumber, contact, estimateDate, dueDate, currency, term, tags, estimateType, discountType, taxes } = req.body;
    try {
      let browseAdd = await new BrowseAdd({
        estimateNumber,
        contact,
        estimateDate,
        dueDate,
        currency,
        term,
        tags,
        estimateType,
        discountType,
        taxes
  
      })
      let result = await browseAdd.save();
      resp.send(result);
    }
    catch (error) {
      resp.send(error);
    }
  }
  module.exports={employeeAdd,employeeRecieved,proposalTemplateRecieved,propsalTemplateAdd,matchingRecieved,matchingAdd,browseAdd,browseRecieved};