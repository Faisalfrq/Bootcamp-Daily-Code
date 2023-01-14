import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Effect = () => {
    let [count,setcount]= useState(0)

    useEffect(()=>{
        console.log('UseEFECT')
        //document.title= `New Message ${count}`
    })

    console.log('renderCalls')
  return (<>
    <div>Hello renderer</div>
    <button onClick={()=>setcount(count+1)} >INCREMENT</button>
    </>
  )
}

export default Effect