import React from 'react'
import { useState } from 'react'
import Comp2 from './Comp2'
//COMPONENT DRILLTING
//COMPONENT LIFTING
const Comp1 = () => {
    let [count,setCount]= useState(0)

    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)} className='btn btn-primary'> Count</button>
        <Comp2 x={count}/>
    </div>
  )
}

export default Comp1

//context api has 3 things
//1> context- has data
//2> provider- provides data to consumer
//3> consumer- uses the Data