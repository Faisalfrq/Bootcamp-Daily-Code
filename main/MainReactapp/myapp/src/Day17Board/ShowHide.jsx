import React from 'react'
import { useState } from 'react'

const ShowHide = () => {
    let[show,setShow]=useState(false)

    let str="This is a Post From ROY. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  return (
    <div>
      <p>
        {/* condition ? if(True){} : else{}  */}
        {show ? str : `${str.substring(0,50)}` } 
      </p>
      <button id='show' className='btn m-2' onClick={() => setShow(!show)}>
          Show more
        </button>
    </div>
  )
}

export default ShowHide
