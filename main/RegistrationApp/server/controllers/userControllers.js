let User=require('../models/userModel')
let bcrypt=require('bcryptjs')//to encrypt password

exports.getAll = (req,res)=>{
    res.send('express route is working')
}
exports.addUser= async (req,res)=>{
    //res.send('express post route is working')
    //we get all data in request.body when user submits 
    
    //console.log(req.body)
    //res.send(req.body)

    let {name,email,password,phone}= req.body
    if(name&&email&&password&&phone){
       // console.log('error:')
        let user= await User.findOne({email:email})
        if(user){
            res.send('user already exist')
        }else{
            try{
                user= new User({name,email,password,phone})

                let salt= await bcrypt.genSalt(10) //salt is a pattern
                user.password= await bcrypt.hash(password,salt) //changes password to encrypted hash of 10 digits

                await user.save()
                res.send('User Registered Successfully')
            }catch(error){
                console.log('error at registring')
            }
        }
    }
    else{
        res.send('please fillout all fields')
    }
}
