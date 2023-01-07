import React from 'react'
import Data from '../Day16Task2/Data'
import { useState } from 'react'
import Post from './Post'
import './Post.css'

const Postlist = () => {
    let [dlt, setdlt] = useState(Data)

    const handleDelete = (id) => {
        console.log('inHandleDelete method')
        let newList = dlt.filter((user) => user.id !== id)
        console.log(newList)
        setdlt(newList)
    };

    return (
        <div className='row container'>
            {dlt.map(user => {
                return (<div>
                    <Post id={user.id} img={user.image} name={user.name} post={user.Post} onDelete={handleDelete} />
                </div>)
            })}
        </div>
    )
}

export default Postlist