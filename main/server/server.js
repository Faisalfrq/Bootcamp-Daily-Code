const express= require('express')//making server
const cors = require('cors')
const app= express()
const userRoutes = require('./routes/users.route')
const db=require('./models/index')


//const whiteListedIps=['http://localhost:3000'] //middleware to allow authorized frontends connect with backend
let corsOptions= {
    origin:'http://localhost:3000'
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(userRoutes)



db.mongoose.connect('mongodb+srv://dbnode:dbnode@cluster0.b3wu0ah.mongodb.net/UserDB?retryWrites=true&w=majority/users',{
    useUnifiedTopology: true,
    UseNewUrlParser: true
})
.then(()=>{console.log('connention successful')})
.catch((err)=>{console.log(err)})

app.get('/users', (req,res)=>{//getting response from server
    res.send("This Route is Working");
})

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log('server is running at '+ PORT)
})
