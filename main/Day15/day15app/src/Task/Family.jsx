import React from 'react'
import './Family.css'
const Family=(props)=> {
  return (
    <div className='UserCard col-4'>
      <img src={props.img}></img>
      <div>
        <h2>{props.name}</h2>
        <p>{props.relation}</p>
      </div>
    </div>
  )
}

export default Family
