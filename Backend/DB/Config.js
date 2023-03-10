const mongoose=require('mongoose');
const db='mongodb+srv://umerkhanswati_:umerkhan@cluster0.qnaspey.mongodb.net/?retryWrites=true&w=majority'
const connection= async(req,resp)=>{
   try{
   await mongoose.connect(db,()=>{
        console.warn("connectionSuccesfull");
    })
   }
   catch(error){
    console.warn(error);
   }
}
connection();
