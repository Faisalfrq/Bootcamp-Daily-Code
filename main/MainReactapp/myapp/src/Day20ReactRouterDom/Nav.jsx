import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className="container">
        <Link className='nav-brand' to='/'><h1>Home</h1></Link>
        
        <Link className='nav-brand' to='/about'><h1>About</h1></Link>
        <Link className='nav-brand' to='/products'><h1>Products</h1></Link>

        
      </div>
    </nav>
  )
}

export default Nav