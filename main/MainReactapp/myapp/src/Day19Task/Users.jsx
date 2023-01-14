import React from 'react'


const Users = (prop) => {
  return (
    <div> 
        <button className='btn btn-primary m-2'>{prop.name}</button>
    </div>
  )
}

export default Users