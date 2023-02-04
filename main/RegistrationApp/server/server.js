const express= require('express') 
let app= express()
 
const dotenv= require('dotenv')
dotenv.config({path:'./config/config.env'})

const loginRoutes = require('./userRoutes/login.routes')
app.use(loginRoutes)

const cors=require('cors')
app.use(cors())

const mongoose= require('mongoose') // used to connect server to mongoDB- it returns the promise

let connectDb=require('./DB/connect')

let port= process.env.PORT; // db port

mongoose.set('strictQuery', true); // to remove depreciation
connectDb() // calling function

app.use(express.json())

let userRouter=require('./userRoutes/userRoutes')
app.use('/api',userRouter)

app.get('/',(req,res)=>{ 
    res.send('hello')
})

app.listen(port,()=>{
    console.log('server is running at port 8080')
})