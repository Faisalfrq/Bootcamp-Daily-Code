import React from 'react'

const Car = (props) => {
    let [img,name,color,year,price]=props
  return (
    <div>
        <div className="card">
            <img class="card-img-top" src={img}></img>
            <h5 class="card-title">{name}</h5>
            <div class="card-text">
                <span>color:{color}</span>
                <span className='ml-5'>year:{year}</span>
                <p>PRICE:{price}</p>
            </div>
            
        </div>
    </div>
  )
}

export default Car
