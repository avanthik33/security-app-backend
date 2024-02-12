const express=require("express")
const userModel=require("../models/userModel")
const router=express.Router()

// sending data to security
router.post("/send",async(req,res)=>{
  let data=req.body
  let userModelObj=new userModel(data)
  await userModelObj.save()
  res.json()
})


module.exports=router