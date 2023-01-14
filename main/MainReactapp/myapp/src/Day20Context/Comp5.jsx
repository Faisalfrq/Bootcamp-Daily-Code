import React, { useContext } from 'react'
// import { Appcontext } from './Main'
import {useGlobalContext} from './Main'

const Comp5 = () => {
  
    // const value= useContext(Appcontext)
    const value=useGlobalContext()
  return (
    <div>
        5
        <h1>{value}</h1>
        
    </div>
  )
}

export default Comp5