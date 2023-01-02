import React from 'react'
import Users from './Users'
import "./User.css"
import Data from "./Data"
// let User1={
//     image:
//     "https://randomuser.me/api/portraits/men/49.jpg"
//     ,name:"Roy Thompson"
//     ,email:"Roy@gmail.com"
// }

// let User2={
//     image:
//     "https://randomuser.me/api/portraits/men/90.jpg"
//     ,name:"Kathryn Mann"
//     ,email:"Kathryna@gmail.com"
// }

// let User3={
//     image:
//     "https://randomuser.me/api/portraits/men/1.jpg"
//     ,name:"Carla Ford"
//     ,email:"Carla@gmail.com"

// }

// let User4={
//     image:
//     "https://randomuser.me/api/portraits/men/79.jpg"
//     ,name:"Tina Barrett"
//     ,email:"Tina@gmail.com"
// }

// let User5={
//     image:
//     "https://randomuser.me/api/portraits/men/83.jpg"
//     ,name:"Charles"
//     ,email:"Charles@gmail.com"
// }

// let User6={
//     image:
//     "https://randomuser.me/api/portraits/men/36.jpg"
//     ,name:"Jill Little"
//     ,email:"Jills@gmail.com"
// }

// let Data=[
//     {
//         image:
//         "https://randomuser.me/api/portraits/men/49.jpg"
//         ,name:"Roy Thompson"
//         ,email:"Roy@gmail.com"
//     },
//     {
//         image:
//         "https://randomuser.me/api/portraits/men/90.jpg"
//         ,name:"Kathryn Mann"
//         ,email:"Kathryna@gmail.com"
//     },
//     {
//         image:
//         "https://randomuser.me/api/portraits/men/1.jpg"
//         ,name:"Carla Ford"
//         ,email:"Carla@gmail.com"
    
//     },
//     {
//         image:
//         "https://randomuser.me/api/portraits/men/79.jpg"
//         ,name:"Tina Barrett"
//         ,email:"Tina@gmail.com"
//     },
//     {
//         image:
//         "https://randomuser.me/api/portraits/men/83.jpg"
//         ,name:"Charles"
//         ,email:"Charles@gmail.com"
//     },
//     {
//         image:
//         "https://randomuser.me/api/portraits/men/36.jpg"
//         ,name:"Jill Little"
//         ,email:"Jills@gmail.com"
//     }


// ]

const Userlist = () => {
  return (
    <div className='row'>
      {/* <Users img={User.image} name={User1.name} email={User1.email}/>
      <Users img={User2.image} name={User2.name} email={User2.email}/>
      <Users img={User3.image} name={User3.name} email={User3.email}/>
      <Users img={User4.image} name={User4.name} email={User4.email}/>
      <Users img={User5.image} name={User5.name} email={User5.email}/>
      <Users img={User6.image} name={User6.name} email={User6.email}/>
      */}
      <h1>{Data.length}</h1>
      {Data.map(user=>{
            return <Users img={user.image} name={user.name} email={user.email} />
        })}
    </div> 
  )
}

export default Userlist
