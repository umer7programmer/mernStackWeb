const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
require('./DB/Config.js');

const userRoutes=require('./Routes/User.js')
const accountingRoutes=require('./Routes/Accounting.js');
const employeeRoutes=require('./Routes/Employee.js')
const taskRoutes=require('./Routes/Task.js');
const jobRoutes=require('./Routes/Job.js');
const saleRoutes=require('./Routes/Sale.js');
const Port=process.env.Port || 3001;






//Middleware or set routes
//authentication
app.use('/users',userRoutes);
//accountingSection
app.use('/accounting',accountingRoutes);
//employeeSection
app.use('/employee',employeeRoutes);
//taskSection
app.use('/task',taskRoutes);
//jobSection
app.use('/job',jobRoutes);
//slaeSection
app.use('/sale',saleRoutes);





if (process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"));
}


// listen server at port 3001
app.listen(Port, () => {
    console.log("Started at port 3001");
})