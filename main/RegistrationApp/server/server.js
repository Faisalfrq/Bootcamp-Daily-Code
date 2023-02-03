const express= require('express') 
let app= express()
 
const dotenv= require('dotenv')
dotenv.config({path:'./config/config.env'})

const mongoose= require('mongoose') // used to connect server to mongoDB- it returns the promise



let port= process.env.PORT; // db port
let db= process.env.DB; //db string


let connectDb=async()=>{    //connecting db
    try{
        await mongoose.connect(db)
        console.log('db connected')
    }catch(error){
        console.log('error: '+error)
    }
    
}
mongoose.set('strictQuery', true); // to remove depreciation
connectDb() // calling function

app.get('/',(req,res)=>{ 
    res.send('hello')
})

app.listen(port,()=>{
    console.log('server is running at port 8080')
})