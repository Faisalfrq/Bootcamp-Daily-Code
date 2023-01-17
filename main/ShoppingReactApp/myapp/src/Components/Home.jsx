import React from 'react'
import { Badge, ProgressBar } from 'react-bootstrap';
import { UseGlobaldata } from './Context'



const Home = () => {
  const { state, isLoading } = UseGlobaldata();
  const { products } = state;
  console.log(state);
  console.log(isLoading);
  return (
    <>
    <div className='row'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        
        products.map((prod) => {
          return (
            <div className='col-3'>
                <div className='card m-2 p-2' style={{height:'50vh',width:'18rem', backgroundColor:'gray',border:"1px solid black"}}>
                  <img className='card-img-top' style={{height:'30vh', width:'17rem'}} src={prod.images}></img>
                  <div className='card-body'>
                  <h2 className='card-title'>{prod.title}</h2>
                  <h3>Price:{prod.price}</h3>
                  </div>
                </div>
            </div>
          );
        })
      )}
      </div>
    </>
  );
};


export default Home
