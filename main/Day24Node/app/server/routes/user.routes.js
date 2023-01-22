const { aggregate } = require('../models/user.model')
const User=require('../models/user.model')
module.exports=function(app){
    app.get('/',(req,res)=>{
        res.send('this route is working')
    }) 
    app.post('/user',(req,res)=>{
        let {name,age,email}=req.body
        console.log('i hit the route')
        const user= new User({
                name: name,
                email: email,
                age: age
            }
        )
        
    
    const a = user.save((err)=>{
        if(err){
            console.log('following issue occured')
            res.status(500).send('there was an error')
        }
        res.status(200).send('record created')
    })
})
}