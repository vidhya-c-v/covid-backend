const express=require("express")
const covidModel=require("../models/covidModel")
const router=express.Router()
router.post("/add",async(req,res)=>{
    let data=req.body
    let covid=new covidModel(data)
    let result=await covid.save()
    res.json({
        status:"success"
    })
})
router.get("/view",async(req,res)=>{
    let data=await covidModel.find()
    res.json(data)
})
router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await covidModel.find(input)
    res.json(data)
})



module.exports=router