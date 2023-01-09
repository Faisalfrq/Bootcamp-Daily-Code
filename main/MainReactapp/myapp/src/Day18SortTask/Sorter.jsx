import React from 'react'
import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap';


const Sorter = (sortProps) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button className='m-3' onClick={() => setIsOpen(!isOpen)}>
        Filters
      </Button>
      <Collapse in={isOpen}>
        <div>
          <div className="row">
          <button className="btn btn-primary" value='blue' onClick={sortProps.noFilter}> NONE </button>
            <div className="col-lg-4">
              <h2>Sort by Color</h2>
              <button className="btn btn-primary" value='blue' onClick={sortProps.myColorFunc}> Blue </button>
              <button className="btn btn-danger" value='red' onClick={sortProps.myColorFunc}> Red </button>
              <button className="btn btn-light" value='white' onClick={sortProps.myColorFunc}> White </button>
              <button className="btn btn-warning" value='yellow' onClick={sortProps.myColorFunc}> Yellow </button>
            </div>
            <div className="col-lg-4">
              <h2>Sort by Company</h2>
              <button className="btn btn-dark" value='BMW' onClick={sortProps.myCompanyFunc}> Bmw </button>
              <button className="btn btn-dark" value='Audi'onClick={sortProps.myCompanyFunc}> Audi </button>
              <button className="btn btn-dark" value='Land Rover'onClick={sortProps.myCompanyFunc}> Land Rover </button>
              <button className="btn btn-dark" value='Alfa Romeo'onClick={sortProps.myCompanyFunc}> Alfa Romeo </button>
            </div>
            <div className="col-lg-4">
              <h2>Sort by Year</h2>
              <button className="btn btn-dark" value='2022' onClick={sortProps.myYearFunc}> 2022 </button>
              <button className="btn btn-dark" value='2021' onClick={sortProps.myYearFunc}> 2021 </button>
              <button className="btn btn-dark" value='2020' onClick={sortProps.myYearFunc}> 2020 </button>
              <button className="btn btn-dark" value='2019' onClick={sortProps.myYearFunc}> 2019 </button>
            </div>
          </div>
        </div>
      </Collapse>
      <hr/>
    </div>
  );
}

export default Sorter
