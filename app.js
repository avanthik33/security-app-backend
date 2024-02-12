const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const userRouter=require("./routers/userRouter")


const app=express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://avanthik:avanthik@cluster0.yuxak7x.mongodb.net/securityDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/user",userRouter)

app.listen(3000,()=>{
  console.log("server is running..")
})