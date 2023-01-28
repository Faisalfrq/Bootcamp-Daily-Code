let express = require('express');
let mongoose =require('mongoose');
let dotenv= require('dotenv')

mongoose.set('strictQuery', true);

let app=express(); //making server
// mongoose.connect(DB)
// let DB= "mongodb+srv://dbnode:dbnode@cluster0.b3wu0ah.mongodb.net/UserDB?retryWrites=true&w=majority"
dotenv.config({path:'./config.env'}) //using config file
let DB = process.env.DATABASE //passing Database string


let connectDb = async()=>{ // connecting to mongoDDB
    try{
        await mongoose.connect(DB)
        console.log('db Connected')
    }
    catch(error){
        console.log(error)
    }
}
connectDb();
app.get("/", (req, res) => {    //getting response from server
    res.send("This Route is Working");
  });

//port =8080 //defining comunication port
port = process.env.PORT
app.listen(port,()=>{ 
    console.log('Server is running at port '+ port)
})

app.post('/register',(req,res)=>{
    res.json(req.body)
    console.log(req.body)
})

app.use(express.json())