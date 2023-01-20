import React from 'react'
import { UseGlobaldata } from './Context'

const Cart = () => {
  let { state, dispatch } = UseGlobaldata()
  let { cart } = state
  //let {cartProducts} = prop
  return (
    <div>
      {cart.length > 0 ? cart.map((prod) => {
        return (
          <div className="row cart-items m-4" style={{ width: "100vw", justifyContent: 'center', alignContent: 'center' }}>
            <img className="col-6" style={{ height: '10vh', width: '8vw' }} src={prod.images} alt='cart item'></img>
            <div className="col-6">
              <div className="row">
                <div className="col-8">
                  <h2 className="row m-0">{prod.title}</h2>
                  <h3 className="row m-0">Price: {prod.price}</h3>
                </div>
                <div class="col-2">
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus" onClick={()=>dispatch({type:'remove-from-cart',payload:prod})}>
                        -
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity" class="form-control input-number" value={prod.qty} min="1" max="100" />
                    <span class="input-group-btn">
                      <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" onClick={()=>dispatch({type:'add-quantity',payload:prod})}>
                        +
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <button className="btn btn-danger" onClick={() => dispatch({ type: 'remove-from-cart', payload: prod })}>Delete</button>
                </div>
              </div>
            </div>
          </div>)
      }
      ) : (
        <h1>Cart is Empty</h1>)
      }
    </div>
  )
}

export default Cart
