import React, { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import Comp5 from './Comp5'
//COMPONENT DRILLTING
//COMPONENT LIFTING

let Appcontext=createContext()

const Main = () => {
    let [count,setCount]= useState(0)    
  return (
    <div>
        <Appcontext.Provider value={count}>
        <Comp5 x={count}/>
        <button onClick={()=>setCount(count+1)} className='btn btn-primary'> Count</button>
        
        {/* <Comp2 x={count}/> */}
        </Appcontext.Provider>
    </div>
  )
}
let useGlobalContext=()=>{
    return useContext(Appcontext)
}

export default Main;
export {Appcontext};
export {useGlobalContext};
//context api has 3 things
//1> context- has data
//2> provider- provides data to consumer
//3> consumer- uses the Data