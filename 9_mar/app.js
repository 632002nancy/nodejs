const express=require("express");
const mongoose=require("mongoose");
const router=require("./routes/student-routes");
const app=express();

app.use(express.json()); //accepts data which is converted to json format
app.use(express.urlencoded({extended: true})); // body parser for html post form.
app.use("/",router); //middleware to run on /

// Set EJS as templating engine
app.set('view engine', 'ejs');  //setting view engine as ejs

mongoose.connect(
    "mongodb+srv://nancyverma632002:pHpDe7egH2QgHmoC@cluster0.hijkfsw.mongodb.net/?retryWrites=true&w=majority"
).then( ()=>{
    app.listen(2000,()=>console.log(`listening at 2000`))
}).catch((err)=>
console.log("Error:",err));

