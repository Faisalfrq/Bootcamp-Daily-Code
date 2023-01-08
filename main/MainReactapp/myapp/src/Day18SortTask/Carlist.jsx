import React from 'react'
import CarData from './CarData'
import Car from './Car'

const Carlist = () => {
  return (
    <div>
        {
        CarData.map((car)=>{
            
            <Car img={car.img} name={car.name} color={car.color} year={car.year} price={car.price} />
        })
    }
    </div>
  )
}

export default Carlist
