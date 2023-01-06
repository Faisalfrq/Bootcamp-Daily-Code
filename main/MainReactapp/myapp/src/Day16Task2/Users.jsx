import React from 'react'
import "./User.css"

const Users = (props) => {
    //destructuring
    let {img,name,email,isActive}=props
    
  return (
    <div className='UserCard col-lg-3 col-md-4 col-sm-6'>
      <img src={img} alt="Profile Image" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{isActive}</p>
      </div>
    </div>
  )
}

export default Users


//persons.map((person)=>{
  //   let{img,name,email,isActive}=person
  //   return  <div>
  //     <img src={img}></img>
  //     <p>{name}</p>
  //     <p>{email}</p>
  //     <p>{isActive}</p>
  //   </div>
    