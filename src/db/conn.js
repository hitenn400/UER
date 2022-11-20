const mongoose=require('mongoose');

const url="mongodb://localhost:27017/Aman_Project_College_MERN";
mongoose.connect(url,{
    
}).then(()=>{
    console.log("connection is successfull");
}).catch((err)=>{
    console.log(err);
})