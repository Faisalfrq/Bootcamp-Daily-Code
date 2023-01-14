import React from 'react'

const PendingDiv = (prop) => {

  return (
    <div className='row'>
        <p className='col-8'>{prop.OrderItem}</p>
        <button >Complete Order</button>
    </div>
  )
}

export default PendingDiv