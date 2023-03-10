const express=require('express');
const { dashboardRecieved, dashboardAdd,teamsTaskAdd,teamsTaskRecieved } = require('../Controllers/Task.js');
const router=express.Router();
router.route('/DashboardRecieved').get(dashboardRecieved);
router.route('/DashboardAdd').post(dashboardAdd);
router.route('/TeamsTaskRecieved').get(teamsTaskRecieved);
router.route('/TeamsTaskAdd').post(teamsTaskAdd);
module.exports=router;
