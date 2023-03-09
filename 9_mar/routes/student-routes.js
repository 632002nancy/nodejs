const express = require("express");
const router=express.Router();

const {displayForm,getStudent,updateStudent,addStudent,deleteStudent}=require("../controller/student-controller.js");

router.get("/formDetails",displayForm);
router.get("/studentDetails",getStudent);
router.post("/addStudent",addStudent);
router.post("/updateStudent",updateStudent);
router.post("/deleteStudent",deleteStudent);

module.exports=router;