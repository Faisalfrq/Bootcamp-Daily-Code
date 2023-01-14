import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'

const Example = () => {
    let [loading,setloading]= useState(true)
    let [getUser,setUser]= useState([])

    let fetchData=async()=>{
        try{
            
            let response=await fetch('https://api.github.com/users')
            //setloading(true)
            console.log(response)
            
            let data= await response.json()
            console.log(data)
            setUser(data);
            setloading(false);

        }catch(error){
            console.log('error '+error) 
        }
    }
    //useEffect(()=>{fetchData()},[])
    useEffect(() => {
        return () => {
            fetchData();
        };
    },[])


    if(loading){
        return <Loading/>
    }else{
        return <div>Main
            <div>
                
                {getUser.map(x=>{
                    return <h3>
                        {x.login}
                    </h3>
                })}
            </div>
            </div>
    }

  
}

export default Example