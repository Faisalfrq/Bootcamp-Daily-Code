//rafce
import React from 'react'
import { useState } from 'react'
import './pTask.css';

const ParagraphHide = () => {

    
  const [hidden, setHidden] = useState(true);
  const [color, setColor] = useState('black');

  function getParagraph() { 
    if (!hidden) {
      return <p>This paragraph is now visible!</p>;
    }
  }


  return (
      <div className='content row'>
          <div className='col-6 content' >
              {getParagraph()}
              <button onClick={() => setHidden(!hidden)} className="btn btn-primary m-2">
                  Toggle paragraph
              </button>
          </div> 
          <div className='col-6 content'>

            <p style={{ color }}>This text is {color}</p>
              <button onClick={() => setColor('blue')} className="btn btn-primary m-2">
                  BLUE
              </button>

              <button onClick={() => setColor('red')} className="btn btn-danger m-2">
                  RED
              </button>

              <button onClick={() => setColor('yellow')} className="btn btn-warning m-2">
                  Yellow
              </button>

          </div>
      </div>
  );
}

export default ParagraphHide
