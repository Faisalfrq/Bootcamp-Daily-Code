import React from 'react'

const Table = (prop) => {
    let {id,img,name,color,year,price,company}= prop
    function addRowInTable(){
        console.log(prop.id,prop.img,prop.name,prop.color,prop.year,prop.price,prop.company)
        return(
            <table>
                <tr>
                    <td>{id}</td>
                    <td>{img}</td>
                    <td>{name}</td>
                    <td>{color}</td>
                    <td>{year}</td>
                    <td>{price}</td>
                    <td>{company}</td>
                </tr>
            </table>
        )
    }

  return (
    <div>
      <button className='btn btn-primary' onClick={addRowInTable}>TableGenerate</button>
    </div>
    
  )
}

export default Table
