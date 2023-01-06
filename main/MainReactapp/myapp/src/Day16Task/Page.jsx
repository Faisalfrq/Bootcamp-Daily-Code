import React from 'react'
import { useState } from 'react'
//import Logo from './Logo'

const Page = () => {
    //const [mode, setMode]= useState(true)
    // function getMode(){
    //     if(mode==true){
    //         return<div className='Light'>
                
    //             <p className='lightText'>This is the paragraph Light Mode</p>
    //         </div>
    //     } else{
    //         return<div className='dark'>
    //             <p className='darkText'>This is paragraph Dark Mode</p>
    //         </div>

    //     }  
    // }

    const [color, setColor] = useState('black')
    const [divColor, setDivColor] = useState('white')

  return (
    // <div>
    //     {getMode()}
    //     <button onClick={()=> setMode(!mode)} className="btn btn-primary m-2">
    //         TOGGLE MODE
    //     </button>
        
    // </div>
    <div style={{backgroundColor:divColor, width:'100vw', height: '100vh'}}>
        <h1 style={{color}}>LOGO</h1>
        <p style={{color}}> PARAGRAPH</p>
        <button onClick={() => {setColor('white'); setDivColor('black')}} className="btn btn-primary m-2">
            SET DARK
        </button>
        <button onClick={() => {setColor('black'); setDivColor('white')}} className="btn btn-primary m-2">
            SET LIGHT
        </button>
    </div>
  )
}

export default Page