import React from 'react'
import { useState } from 'react'
import UserData from './UserData'
import Users from './Users'


const UserPostsMainPage = () => {
    //let[user, setUser]= useState(UserData)

    // function readUserName(){
    //     console.log("in user")
    //     UserData.map(item => {
    //         //console.log(item.name)
    //         return (<>
    //             <button className='btn btn-primary'>{item.name}</button>
    //         </>)
    //     })
    // }

    function getPost(){
         UserData.map(item=>{
            let [id,image,name,Post]=UserData
            //let [Title,P]
            Post.map(pt=>{
                 return <div><h2>{pt.Title}</h2></div>
            })
        })
    }
    let [user,setUser]=useState(UserData)
  return (
    <div className='Main row'>
        <div className=' col-lg-4 SideBar'>
            {/* {readUserName()} */}
            {
            UserData.map(item => {
            console.log(item.name)
            return (<div>
                <button value={item.id} className='btn btn-primary m-2'>{item.name}</button>
            </div>)
        })}
        </div>

        <div className='col-lg-8 Posts'>
        {
            user.map(item => {
                

            return (<div>
                <h2>{item.Post[0].Title}</h2>
                <p>{item.Post[0].P}</p>
            </div>)
            ///////////////////////////
            // let [id,image,name,Post]=item
            // Post.map(pst=>{
            //     return <div><h2>{pst.item}</h2></div>
            // })
            ///////////////////////////
            // for(let i=0;i<=item.Post.length;i++){
            //     return <h2>{item.Post[i].Title}</h2>
            // }
            

        })}
        {/* {getPost()} */}

        </div>
        

    </div>
  )
}

export default UserPostsMainPage