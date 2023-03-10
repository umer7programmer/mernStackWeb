const express=require('express');
const router=express.Router();
const {manageAdd,manageRecieved,approvalAdd,approvalRecieved,approvalPolicyAdd, employeeLevelRecieved, employeeLevelAdd, positionRecieved, positionAdd}=require('../Controllers/Employee.js')
router.route('/ManageRecieved').get(manageRecieved);
router.route('/ManageAdd').post(manageAdd);
router.route('/ApprovalRecieved').get(approvalRecieved);
router.route('/ApprovalAdd').post(approvalAdd);
router.route('/ApprovalPolicyAdd').post(approvalPolicyAdd);
router.route('/EmployeeLevelRecieved').get(employeeLevelRecieved),
router.route('/EmployeeLevelAdd').post(employeeLevelAdd)
router.route('/PositionRecieved').get(positionRecieved),
router.route('/PositionAdd').post(positionAdd),
module.exports=router;
