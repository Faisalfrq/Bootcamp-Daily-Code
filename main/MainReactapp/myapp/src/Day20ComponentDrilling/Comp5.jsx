import React from 'react'
import Comp6ChildtoParent from './Comp6ChildtoParent'

const Comp5 = (p) => {
    //let count=p.x+1
    //console.log(count)
    //p.setCount(1)
    
  return (
    <div>
        5
        <h1>{p.x}</h1>
        <Comp6ChildtoParent>
          Para Of Parent
        </Comp6ChildtoParent>
    </div>
  )
}

export default Comp5