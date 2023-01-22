const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send('this route is working')
})

const PORT = process.env.PORT || 3006
app.listen(PORT,()=>
    {
    console.log(`server is running at ${PORT}`)
    }
)