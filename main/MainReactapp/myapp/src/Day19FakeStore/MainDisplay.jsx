import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './MainDisplay.css'

const MainDisplay = () => {
    let [products, setProducts] = useState([])
    let[show,setShow]=useState(false)

    let fetchData = async () => {
        try {

            let response = await fetch('https://fakestoreapi.com/products')
            //setloading(true)
            console.log(response)
            let data = await response.json()
            //console.log(data)
            setProducts(data);
        } catch (error) {
            console.log('error ' + error)
        }
    }
    useEffect(() => {
        return () => {
            fetchData();
        };
    }, [])

    return (
        <div className='row container'>
            {
                products.map((item) => {
                    
                    console.log(item.title)
                    //return <h2>{item.title}</h2>
                    //let {title, price, description, category, image, rating} = item;
                   //console.log(title)
                    return (<div className='col-lg-3'>
                    <div className=' card p-1'>
                        <img src={item.image}></img>
                        <div className='card-body'>
                        <h3>{item.title}</h3>
                        <div className='YearColor'><span>{item.price}</span> <span>{item.category}</span></div>
                        <p>{show ? item.description : `${item.description.substring(0,50)}` }</p>
                        {/* <h5>{item.rating}</h5> */}
                        <button id='show' className='btn m-2' onClick={() => setShow(!show)}>
                            Show more
                        </button>
                        </div>
                    </div>
                    </div>)
                })

            }
        </div>
    )
}

export default MainDisplay