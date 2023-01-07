import React from 'react'

const FormDisplay = (props) => {
    let[name,devName,email,position,satisfied,Unsatisfied,message]= props;
  return (
    <div>
       <p>Name:{name}</p>
       <p>Developer Name:{devName}</p>
       <p>Email:{email}</p>
       <p>Position:{position}</p>
       <p>Satisfied:{satisfied}</p>
       <p>Not Satisfied:{Unsatisfied}</p>
       <p>Message:{message}</p>
       

    </div>
  )
}

export default FormDisplay
