const Student=require("../model/student-model");

const displayForm=(req,res)=>{
    res.render("student-views");
}

const getStudent=async(req,res,next)=>{
    let user;
    user=await Student.find();

    if(!user){
        return res.status(422).json({message:"no records found"});
    }
    return res.status(200).json({user});
}

const addStudent=async(req,res,next)=>{
    if(name?.trim()===""&&
    isNaN(roll_no)&&
    classSection?.trim()===""&&
    subjects.length===0){
        return res.status(422).json({message:"data not valid"});
    }
    let data;
    try{
        data=new Student({
            name,
            roll_no,
            classSection,
            subjects,
        });
        data=await data.save();
    }catch(err){
        return next(err);
    }
}




exports.displayForm=displayForm;
exports.getStudent=getStudent;
exports.addStudent=addStudent;
exports.updateStudent=updateStudent;
exports.deleteStudent=deleteStudent;

