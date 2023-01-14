import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Routes>
            <Route path='/about' element={About}/> 
            {/* <Route path="/about" component={About}/> */}
        </Routes>
        
    </div>
    
  )
}

export default Home