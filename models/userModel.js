const mongoose=require("mongoose")

const userModel=new mongoose.Schema({
  securityId:{
    type:mongoose.Schema.Types.ObjectId,ref:"securityCollection",
    required:true
  },
  userName:{
    type:String,
    required:true
  },
  purpose:{
    type:String,
    required:true
  },
  date:{
    type:Date,default:Date.now,
    required:true
  },
  status:{
    type:Boolean,default:false,
    required:true
  }
})

module.exports=mongoose.model("userCollection",userModel)