const  mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/kuvira", {
     useNewUrlParser:true,
     useUnifiedTopology:true
}).then(()=>{
     console.log("connection successfull done");
 }).catch((error)=>{
console.log(error);
 })