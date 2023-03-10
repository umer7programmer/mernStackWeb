const DashboardAdd=require('../DB/Task/Dashboard/Dashboard.js');
const TeamsTaskAdd=require('../DB/Task/TeamsTask/TeamsTask.js');
//////////////////////////////taskSection/////////////////////////
/////////////////////////////dashboardRecievedSection/////////////////////

const dashboardRecieved=async(req,resp)=>{
 try{
    let dashboardRecieved=await DashboardAdd.find();
    if(dashboardRecieved.length>0){
        resp.send(dashboardRecieved);

    }
    else{
       resp.send({message:"No data in dashboard table"}) 
    }
 }
 catch(error){
    resp.send(error)
 }
}
////////////////////////////////////dashboardAdd////////////////
const dashboardAdd=async(req,resp)=>{
    const {    author,template, contact, jobPostUrl, proposalDate, estimateNumber,estimateDate,dueDate,totalValue,sender,tags,status}=req.body;
  try{
    let dashboardAdd= await new DashboardAdd({
        author,
        template,
         contact,
          jobPostUrl, 
          proposalDate, 
          estimateNumber,
          estimateDate,
          dueDate,
          totalValue,
          sender,
          tags,
          status
    })
    let result=await dashboardAdd.save();
    resp.send(result);
  }
  catch(error){
    resp.send(error)
  }
}
//////////////////////////////taskSection/////////////////////////
/////////////////////////////teamsTaskRecievedSection/////////////////////

const teamsTaskRecieved=async(req,resp)=>{
  try{
     let teamsTaskRecieved=await TeamsTaskAdd.find();
     if(teamsTaskRecieved.length>0){
         resp.send(teamsTaskRecieved);
 
     }
     else{
        resp.send({message:"No data in teamsTask table"}) 
     }
  }
  catch(error){
     resp.send(error)
  }
 }
 ////////////////////////////////////teamsTaskAdd////////////////
 const teamsTaskAdd=async(req,resp)=>{
     const {       author,template, contact, jobPostUrl, proposalDate, estimateNumber,estimateDate,dueDate,totalValue,sender,tags,status}=req.body;
   try{
     let teamsTaskAdd= await new TeamsTaskAdd({
      author,
      template,
       contact,
        jobPostUrl, 
        proposalDate, 
        estimateNumber,
        estimateDate,
        dueDate,
        totalValue,
        sender,
        tags,
        status
     })
     let result=await teamsTaskAdd.save();
     resp.send(result);
   }
   catch(error){
     resp.send(error)
   }
 }
module.exports={dashboardAdd,dashboardRecieved,teamsTaskAdd,teamsTaskRecieved};