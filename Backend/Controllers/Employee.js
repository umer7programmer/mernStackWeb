const ManageAdd = require('../Db/Employee/Manage/Manage.js');
const ApprovalAdd = require('../DB/Employee/Approval/Approval.js')
const ApprovalPolicyAdd = require('../Db/Employee/Approval/ApprovalPolicy.js');
const EmployeeLevelAdd = require('../DB/Employee/EmployeeLevel/EmployeeLevel.js')
const PositionAdd = require('../DB/Employee/Position/Position.js')
////////////////////////////////////////////////manageSection////////////////////////////////////////////////////
///////////////////////////////////////////////manageRecieved//////////////////////////////////////////////////
const manageRecieved = async (req, resp) => {


  try {
    let manageRecieved = await ManageAdd.find();
    if (manageRecieved.length > 0) {
      resp.send(manageRecieved);
    }
    else {
      resp.send("NO data in the manage table");

    }
  }
  catch (error) {
    resp.send(error);
  }


}
///////////////////////////////////////////addmanage////////////////////////////////////////////////////
const manageAdd = async (req, resp) => {
  const {estimateNumber, estimateDate, dueDate, totalValue, sender, tags, status} = req.body;
  try {
    let manageAdd = await new ManageAdd({
      estimateNumber,
       estimateDate,
        dueDate, 
        totalValue,
         sender, 
         tags, 
         status

    })
    let result = await manageAdd.save();
    resp.send(result);
  }
  catch (error) {
    resp.send(error);
  }
}
////////////////////////////////////////////////approvalsSection////////////////////////////////////////////////////
///////////////////////////////////////////////approvalRecieved//////////////////////////////////////////////////
const approvalRecieved = async (req, resp) => {


  try {
    let approvalRecieved = await ApprovalAdd.find();
    if (approvalRecieved.length > 0) {
      resp.send(approvalRecieved);
    }
    else {
      resp.send("NO data in the approvals table");

    }
  }
  catch (error) {
    resp.send(error);
  }


}
///////////////////////////////////////////addapproval////////////////////////////////////////////////////
const approvalAdd = async (req, resp) => {
  const { estimateNumber, estimateDate, dueDate, totalValue, sender, tags, status } = req.body;
  try {
    let approvalAdd = await new ApprovalAdd({
      estimateNumber,
      estimateDate,
      dueDate,
      totalValue,
      sender,
      tags,
      status

    })
    let result = await approvalAdd.save();
    resp.send(result);
  }
  catch (error) {
    resp.send(error);
  }
}
////////////////////////////////////////approvalPolicyadd///////////////////////////////////////////////////////////
const approvalPolicyAdd = async (req, resp) => {
  const { name, description, defaultApprovalPolicy } = req.body;
  try {
    let approvalPolicyAdd = await new ApprovalPolicyAdd({
      name,
      description,
      defaultApprovalPolicy

    })
    let result = await approvalPolicyAdd.save();
    resp.send(result);
  }
  catch (error) {
    resp.send(error);
  }
}
//////////////////////////////////////employeeLevel//////////////////////////////////////////////////////////////
/////////////////////////////////////employeeLevelRecieved////////////////////////////////////////////////////////////
const employeeLevelRecieved = async (req, resp) => {

try{
  let employeeLevelRecieved = await EmployeeLevelAdd.find();
  if (employeeLevelRecieved.length > 0) {
    resp.send(employeeLevelRecieved);
  }
  else {
    resp.send("NO data in the employeeLevel Table");
  }
}
catch(error){
  resp.send(error);
}

}
//////////////////////////////////////////employeeLevelAdd////////////////////////////////////////////////////////////////
const employeeLevelAdd = async (req, resp) => {
  const { employeeLevel } = req.body;
  let employeeLevelAdd = await new EmployeeLevelAdd({
    employeeLevel
  })
  let result = await employeeLevelAdd.save();
  resp.send(result);

}
//////////////////////////////////////position//////////////////////////////////////////////////////////////
/////////////////////////////////////positionRecieved////////////////////////////////////////////////////////////
const positionRecieved = async (req, resp) => {

  try {
    let positionRecieved = await PositionAdd.find();
    if (positionRecieved.length > 0) {
      resp.send(positionRecieved);
    }
    else {
      resp.send("NO data in the position Table");
    }
  }
  catch (error) {
    resp.send(error);
  }

}
//////////////////////////////////////////positionAdd////////////////////////////////////////////////////////////////
const positionAdd = async (req, resp) => {
  const { position } = req.body;
  try {
    let positionAdd = await new PositionAdd({
      position
    })
    let result = await positionAdd.save();
    resp.send(result);
  }
  catch (error) {
    resp.send(error);
  }

}
module.exports = { manageRecieved, manageAdd, approvalRecieved, approvalAdd, approvalPolicyAdd, employeeLevelAdd, employeeLevelRecieved, positionAdd, positionRecieved };