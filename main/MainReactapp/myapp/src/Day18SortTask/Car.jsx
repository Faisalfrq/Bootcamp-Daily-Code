import React from 'react'
import './car.css'

const Car = (prps) => {
    
  return (
    <div>
        <div className="card">
            <img class="card-img-top" src={prps.img} alt='A CAR'></img>
            <h3 class="card-title">{prps.name}</h3>
            <div class="card-text">
                <p>PRICE:{prps.price}</p>
                <div className='yearColor'>
                  <h5 style={{ display: 'inline-block', width: 'calc(50% - 10px)' }}>color:<span style={{color:prps.color}}> {prps.color}</span></h5>
                  <h5 style={{ display: 'inline-block', width: 'calc(50% - 10px)' }}>year: {prps.year}</h5>
                </div>
                <button className='btn btn-primary m-3'>More Details</button>
            </div>
            
        </div>
    </div>
  )
}

export default Car
