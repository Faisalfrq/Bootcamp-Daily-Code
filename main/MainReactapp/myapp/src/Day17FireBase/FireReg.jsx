import React from 'react'
import { useState } from 'react'
const FireReg = () => {
    let [name, setName] = useState('')
    let [password, setPassword] = useState('')

    let [user, setUser] = useState([])

    
    const handleChange=(e)=>{
        e.preventDefault();
        //setUser({...user,[name]:password})
        let userData = { name:name,password:password }
        console.log(userData)
        setUser([...user,userData])    
    }

    const handleClick=async(e)=>{
        e.preventDefault();
        
        let response=await fetch('https://fir-reg-bafc7-default-rtdb.firebaseio.com/usertable.json'
        ,{
            method:'post',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({name, password})
        })
        if(response){
            console.log('Data Submitted')
        }else{
            console.log('Data Failed')
        }
    }

  return (
    <div>
      <form id='form' className='m-5' onSubmit={handleClick}>

                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input 
                                
                                value={name} 
                                type="text" 
                                id="form6Example1" 
                                class="form-control" 
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <label class="form-label fw-bold" for="form6Example1">USER NAME</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <input 
                                
                                value={password} 
                                type="text" 
                                id="form6Example2" 
                                class="form-control" 
                                onChange={(e) => { setPassword(e.target.value) }}
                                />
                            <label class="form-label fw-bold" for="form6Example2">Password</label>
                        </div>
                    </div>
                </div>


                <button onClick={handleClick}type="submit" class="btn btn-primary btn-block mb-4" >SUBMIT REVIEW</button>
            </form>
    </div>
  )
}

export default FireReg
