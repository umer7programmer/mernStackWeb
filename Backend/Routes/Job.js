const express=require('express');
const { employeeAdd, employeeRecieved, proposalTemplateRecieved, propsalTemplateAdd, browseAdd, browseRecieved } = require('../Controllers/Job');
const router=express.Router();
router.route('/EmployeeRecieved').get(employeeRecieved);
router.route('/EmployeeAdd').post(employeeAdd);
router.route('/ProposalTemplateRecieved').get(proposalTemplateRecieved);
router.route('/ProposalTemplateAdd').post(propsalTemplateAdd);
router.route('/BrowseRecieved').get(browseAdd);
router.route('/BrowseAdd').post(browseRecieved);

module.exports=router;