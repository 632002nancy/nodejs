const fs = require("fs");

 //fs.mkdirSync("crudInFile");  //makes new dir

fs.writeFileSync("crudInFile/practiceCrud.txt","crud"); //first checks if the file is present or not if nit then make it and write inside it / already present- overwrite it 

fs.appendFileSync("crudInFile/practiceCrud.txt","crud application"); //append the data into existing file data