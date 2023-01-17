import React from 'react'
import { Link } from 'react-router-dom'

const Day20Nav = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className="container">
        <Link className='nav-brand' to='/'><h1>Table</h1></Link>
        
        <Link className='nav-brand' to='/about'><h1>=</h1></Link>
        
        <Link className='nav-brand' to='/add'><h1>Add</h1></Link>
      </div>
    </nav>
  )
}

export default Day20Nav
