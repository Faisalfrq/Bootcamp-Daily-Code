import React from 'react'
//import { Badge, ProgressBar } from 'react-bootstrap';
import { UseGlobaldata } from './Context'
import Products from './Products';



const Home = () => {
  const { state, isLoading } = UseGlobaldata();
  const { products } = state;
  console.log(state);
  console.log(isLoading);
  return (
    <>
    <div>
      {isLoading ? (
        <div style={{height:'100vh', width:'100vw',justifyItems:'center',alignContent:'center'}}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className='row'>
          {
            products.map((prod) => {
              return (<Products prod={prod} key={prod.id}/>);
            })
          } 
        </div>
      )
      }
      
      </div>
    </>
  );
};


export default Home
