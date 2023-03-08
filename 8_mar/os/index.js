const os = require("os");

const freeMem=os.freemem();
console.log(`${freeMem/1024/1024/1024}`);      //to get how much free memory is left in gb

const totalMem=os.totalmem();
console.log(`${totalMem/1024/1024/1024}`);      //to get how much free memory is left in gb
