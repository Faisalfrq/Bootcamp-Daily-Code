import React from 'react'
import Comp3 from './Comp3'

const Comp2 = (p) => {
  return (
    <div>
        2
        <Comp3 x={p.x} />
        
    </div>
  )
}

export default Comp2