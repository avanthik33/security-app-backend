const mongoose=require("mongoose")

const securityModel=new mongoose.Schema({
  securityName:{
    type:String,
    required:true
  },
  phoneNo:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

module.exports=mongoose.Schema("securityCollection",securityModel)