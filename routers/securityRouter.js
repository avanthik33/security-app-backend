const express=require("express")
const bcrypt=require("bcryptjs")
const securityModel = require("../models/securityModel")

const router=express.Router()


//security signup
const hashFunction=async(pass)=>{
  let salt=await bcrypt.genSalt(10)
  return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
  let data=req.body
  inputPassword=data.password
  hashFunction(inputPassword).then((hashedPass)=>{
    data.password=hashedPass
    let securityModelObj=new securityModel(data)
    securityModelObj.save()
  })
  res.json({status:"success"})
})


//security signin
router.post("/signin",async(req,res)=>{
  let input=req.body
  let username=input.securityName
  let inputPassword=input.password
  let data=await securityModel.findOne({securityName:username})
  if(!data){
    return(res.json({
      status:"no user"
    }))
  }
  let dbPassword=data.password
  let match=await bcrypt.compare(inputPassword,dbPassword)
  if(!match){
    return(res.json(
      {status:"password is incorrect"}
    ))
  }
  res.json({status:"success","SecurityData":data})
})

module.exports=router