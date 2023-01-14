import React from 'react'
import { createContext } from 'react'

let sepContext= createContext()

const SeprateContext = () => {
  return (
    <sepContext.Provider value={count}>
        <Comp5 x={count}/>
        <button onClick={()=>setCount(count+1)} className='btn btn-primary'> Count</button>
        
        {/* <Comp2 x={count}/> */}
        </sepContext.Provider>
  )
}

export default SeprateContext