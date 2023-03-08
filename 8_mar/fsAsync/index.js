const fs = require("fs");

// fs.writeFile("async.txt","hello world",(err)=>{
//     console.log("file is created");
// });
// fs.appendFile("async.txt","!!!",(err)=>{
//     console.log("file is appended ");
// });
fs.readFile("async.txt","utf-8",(err,data)=>{  //here data is the data we get from the file 
    console.log(data);
});