const fs = require("fs");

 //fs.mkdirSync("crudInFile");  //makes new dir

fs.writeFileSync("crudInFile/practiceCrud.txt","crud"); //first checks if the file is present or not if nit then make it and write inside it / already present- overwrite it 

fs.appendFileSync("crudInFile/practiceCrud.txt"," application"); //append the data into existing file data

//const data = fs.readFileSync("crudInFile/practiceCrud.txt"); //read the data and gives buffer data
const data = fs.readFileSync("crudInFile/practiceCrud.txt","utf-8"); //read the data and gives original data,when we use utf-8 encoding
console.log(data);

//fs.unlinkSync("crudInFile/practiceCrud.txt"); //to delete file
//fs.rmdirSync("crudInFile"); //to delete folder
