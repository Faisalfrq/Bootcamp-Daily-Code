import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from './Nav'

const Products = () => {
  return (
    <div >
      
      <h1>Products</h1>
      <Link className='nav-brand' to='productmen'><h1>Men category</h1></Link>
      <Link className='nav-brand' to='productwoman'><h1>Woman category</h1></Link>
      <Outlet/>
    </div>
  )
}

export default Products