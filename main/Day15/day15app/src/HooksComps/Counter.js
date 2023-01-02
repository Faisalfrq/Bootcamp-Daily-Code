import React, { useState } from 'react'
import './counter.css'

const Counter=()=> {
    //use state to 
    let [countx,setCount]=useState(0)
    
    const zero=(countx)=>{
        if(countx!=0){
            return countx
        }else{
            return "zero"
        }
    }
    
    // var x =document.getElementById('div2')
    // let [x,y]=useState('none')
    // const hide=()=>{
    //     var x =document.getElementById('div2').style.display;
        
    //     // if(x.style.display==="none"){
    //     //     x.style.display = "block";
    //     // }else{
    //     //     x.style.display = "none";
    //     // }
    // }
    
    
  return (
    <div className='content'>
          <div>
              <h1>{zero(countx)}</h1>
              <button onClick={() => setCount(countx + 1)} className="btn btn-primary m-2">
                  Add
              </button>
              <button onClick={() => setCount(countx = 0)} className="btn btn-primary m-2">
                  Reset
              </button>
              <button onClick={() => setCount(countx - 1)} className="btn btn-primary m-2">
                  Sub
              </button>
          </div>
          {/* <div>

            <p id='div2'>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>

            <button onClick={hide()} className="btn btn-primary m-2">
                    Hide
            </button>
          </div> */}
    </div>

  )
}

export default Counter

//hide paragra
//change paragraph color randomly
//make 2 componenets out of counter thing method in parent and other things in comps