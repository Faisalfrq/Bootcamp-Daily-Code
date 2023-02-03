const mongoose= require('mongoose') // used to connect server to mongoDB- it returns the promise

let db=process.env.DB

let connectDb=async()=>{    //connecting db
    try{
        await mongoose.connect(db)
        console.log('db connected')
    }catch(error){
        console.log('error: '+error)
    }
    
}
module.exports= connectDb