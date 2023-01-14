import React, { useState } from 'react'
import CompleteOrderDiv from './CompleteOrderDiv'
import PendingDiv from './PendingDiv'

const Order = () => {
    let [order, setOrder] = useState('')
    let [pending,setPending]= useState(true)
    let [complete,setComplete]= useState(false)


  return (
    <div>
        <div className="row m-3">
            <form id='form'>
            <label className="col-lg-3 form-label fw-bold" style={{fontSize:'2.5em'}}>Place Order</label>
            <input type="text" className="col-lg-3" onChange={(e)=>{ setOrder(e.target.value)}}/><hr/>
            <button type='submit' className="btn btn-primary btn-block mb-4 col-lg-2" >SUBMIT</button>
            </form>
        </div>
        <div className='row'>
          <div className='col-6'>
            <PendingDiv orderItem={order}/>
          </div>
          <div className="col-6">
           <CompleteOrderDiv/>
          </div>
          
        </div>
    </div>
  )
}

export default Order