import React from 'react'
import Users from './Users'
import "./User.css"
import Data from "./Data"
import { useState } from 'react'

const Userlist = () => {

  function activeUser() {
    let count = 0
    Data.map(user => {
      if (user.isActive == "online") {
        count += 1
      }
    })
    return count;
  }

  let [person, setPerson] = useState(Data)

  function removeOffline(name){
    let newList = person.filter((user)=>user.name!==name)
    setPerson(newList)
  }


  return (
    <div className='row'>
      {/* <h1>People Online {activeUser()}</h1> */}
      <h1>{person.length === 0 ? 'No active Users' : `total ${person.length} are active`}</h1>
      {person.map(user => {
        return (<div> 
                  <Users img={user.image} name={user.name} email={user.email} isActive={user.isActive} />
                  
                  {/* Using call back function  */}
                  <button onClick={()=>removeOffline(user.name)} className='btn btn-danger '> Delete</button> 

                  
                </div>
        )
      })}

      <button onClick={() => { setPerson([]) }} className='btn btn-danger'>DELETE ALL</button>
      {/* <button onClick={() => removeOffline()} className="btn btn-primary m-2">
        Remove Offline Users
      </button> */}
    </div>
  )
}

export default Userlist


//delete Post // read more //may use through user accounts 