import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Comp = () => {
    let [user,setUser]= useState({
        name:'',
        email:'',
        password:'',
        phone:''
    })
    let handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({...user,[name]:value})
    }
    let handleSubmit= async(e)=>{
        e.preventDefault();
        let{name,email,password,phone}=user

        if(name&&email&&password&&phone){
            try{
                 await axios.post('http://localhost:8080/api/register',user)
                 alert('registeration successful')
            }catch(error){
                alert(error)
            }
        }else{
            alert('please fill out whole form')
        }
        
    }

  return (
    <div  className='form-content'>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='name' name='name' value={user.name} onChange={handleChange}></input><hr/>
            <input type='email' placeholder='email' name='email' value={user.email} onChange={handleChange}></input><hr/>
            <input type='text' placeholder='password' name='password' value={user.password} onChange={handleChange}></input><hr/>
            <input type='text' placeholder='phone' name='phone' value={user.phone} onChange={handleChange}></input><hr/>
            <button className='btn' >Register</button>
        </form>
    </div>
  )
}

export default Comp
