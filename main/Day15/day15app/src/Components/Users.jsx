import React from 'react'
import "./User.css"

const Users = (props) => {
    //destructuring
    let {img,name,email}=props
  return (
    <div className='UserCard col-lg-3 col-md-4 col-sm-6'>
      <img src={img} alt="Profile Image" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Users
