import React, { useState } from 'react'
import Table from './Table'

const Add = () => {
    let [id, setId] = useState('')
    let [name, setCarName] = useState('')
    let [img, setImgUrl] = useState('')
    let [color, setCarColor] = useState('')
    let [year, setYear] = useState('')
    let [price, setPrice] = useState('')
    let [company, setCompany] = useState('')
    //const [rows, setRows] = useState([]);
    
    const SubmitFunc = (e) => {
        e.preventDefault();
            id= Math.floor(Math.random() * 1000)
        //call push new car in Table or just elements
        console.log(id,img,name,color,year,price,company)
        return (
        <Table id={id} img={img} name={name} color={color} year={year} price={price} company={company}/>
        )
        // const newRow = {
        //     id: Math.floor(Math.random() * 1000),
        //     img: img,
        //     name: name,
        //     color: color,
        //     year: year,
        //     price: price,
        //     company: company
        // };
        // setRows([...rows, newRow]);
    }


  return (
    <div>
        <form id='form' className='m-5' onSubmit={SubmitFunc}>

<div className="row form-outline m-3">
    <label className="col-lg-3 form-label fw-bold">IMAGE URL</label>
    <input type="text" className="col-lg-6" value={img} onChange={(e)=>{ setImgUrl(e.target.value)}}/>
</div>

<div className="row form-outline m-3">
    <label className="col-lg-3 form-label fw-bold">CAR NAME</label>
    <input type="text" className="col-lg-6" value={name} onChange={(e)=>{ setCarName(e.target.value)}}/>
</div>

<div className="row form-outline m-3">
    <label className="col-lg-3 form-label fw-bold">COLOR</label>
    <input type="text" className="col-lg-6" value={color} onChange={(e)=>{ setCarColor(e.target.value)}}/>
</div>

<div className="row form-outline m-3">
    <label className="col-lg-3 form-label fw-bold" >YEAR</label>
    <input type="text" className="col-lg-6" value={year} onChange={(e)=>{ setYear(e.target.value)}}/>
</div>

<div className="row form-outline m-3">
    <label className="col-lg-3 form-label fw-bold">PRICE</label>
    <input type="text" className="col-lg-6" value={price} onChange={(e)=>{ setPrice(e.target.value)}}/>
</div>

<div className="row form-outline m-3">
    <label className="col-lg-3 form-label fw-bold">COMPANY</label>
    <input type="text" className="col-lg-6" value={company} onChange={(e)=>{ setCompany(e.target.value)}}/>
</div>


<button type="submit" className="btn btn-primary btn-block mb-4" >SUBMIT</button>
</form>
    </div>
  )
}

export default Add