const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const covidRouter=require("./controllers/covidRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://vidhya_14:vidhya_14@cluster0.u7pxfo8.mongodb.net/covidDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/covid",covidRouter)


app.listen(3001,()=>{
    console.log("server running")
})