import React from 'react'
import CarData from './CarData'
import Car from './Car'
import NavBar from './NavBar'
import Sorter from './Sorter'
import { useState } from 'react'
import AddCar from './AddCar'


const Carlist = () => {

  let [cars, setCars] = useState(CarData)

  const filterNone = () => {
    setCars(CarData);
  }
  const filterColorCar = (item) => {
    const updatedItems = CarData.filter((curElement) => {
      return curElement.color === item.target.value
    });
    setCars(updatedItems);
  }
  const filterCompanyCar = (item) => {
    const updatedItems = CarData.filter((curElement) => {
      return curElement.company === item.target.value
    });
    setCars(updatedItems);
  }
  const filterYearCar = (item) => {
    const updatedItems = CarData.filter((curElement) => {
      return curElement.year === item.target.value
    });
    setCars(updatedItems);
  }

  function ShowAll() {
    console.log("showALl")
    return (
      cars.map(car => {
        return (<div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
          <Car img={car.img} name={car.name} color={car.color} year={car.year} price={car.price} />
        </div>
        )
      })
    )
  }

  return (
    <div>
      <NavBar />
      <div id='main'>
        <Sorter myColorFunc={filterColorCar} myCompanyFunc={filterCompanyCar} myYearFunc={filterYearCar} noFilter={filterNone} />

        <div className='main row m-2'>
          {
            ShowAll()
          }
        </div>
      </div>


      <div id="AddCar" style={{ display: 'none' }}>
        <AddCar/>
      </div>
    </div>
  )
}

export default Carlist
