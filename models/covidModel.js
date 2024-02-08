const mongoose=require("mongoose")
const covidSchema=new mongoose.Schema(
    {
        patientId:String,
        name:String,
        age:String,
        place:String,
        result:String
    }
)
module.exports=mongoose.model("covid",covidSchema)
