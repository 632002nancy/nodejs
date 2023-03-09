const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    classSection:{
        type:String,
        required:true,
    },
    roll_no:{
        type:Number,
        required:true,
        unique:true,
    },
    subjects:{
        type:Array,
    }
});

//the model function of mongoose creates a model called Students 
module.exports=mongoose.model("Students",studentSchema);