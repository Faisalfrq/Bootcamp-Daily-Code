import React from 'react'
//import Cart from './Cart'
import { UseGlobaldata } from './Context'
import './Style.css'


const Products = (props) => {
  let {state,dispatch}=UseGlobaldata()
  let {cart}=state 
  let { prod } = props
  return (
    <div className='col-3'>
      <div className='card m-2 p-2'>
        <img className='card-img-top' src={prod.images} alt='products'></img>
        <div className='card-body'>
          <h2 className='card-title'>{prod.title}</h2>
          <h3>Price:{prod.price}</h3>
          <p>Category:{prod.category.name} </p>
          
          { 
            cart.some(item=>item.id===prod.id) ? (
            <button className='btn btn-danger' onClick={()=>dispatch({type:'remove-from-cart',payload:prod})}> Remove from cart</button>
            ):(
            <button className='btn btn-primary' onClick={()=>dispatch({type:'add-to-cart',payload:prod})}> Add to cart </button>)
          }
          

          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default Products
