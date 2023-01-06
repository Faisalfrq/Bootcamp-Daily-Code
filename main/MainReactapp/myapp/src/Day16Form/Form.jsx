import React from 'react'
import { useState } from 'react'
import './form.css'

const Form = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    //to save we make another State
    let[user,setUser]= useState([])
    // let [phone,setPhone]=useState('')

    const SubmitFunc=(e)=>{
        e.preventDefault();
        console.log("submit function")

        let userData={id:Math.floor(Math.random()*1000),name:name,email:email} //if key and value are same then right it one time
        
        console.log(userData)
        setUser([... user,userData])

        setName(''); setEmail('');//clearing data
    }

    return (
        <div>
            <form onSubmit={SubmitFunc}>
                <input 
                    type='text' 
                    placeholder='Name' 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }}>

                </input>
                <input 
                    type='text' 
                    placeholder='Email' 
                    value={email} onChange={(e) => { setEmail(e.target.value) }}>

                </input>
                {/* <input type='text' placeholder='Number'></input> */}
                <button type='submit' className='btn btn-primary'>Register</button>
            </form>

        </div>
    )
}

export default Form