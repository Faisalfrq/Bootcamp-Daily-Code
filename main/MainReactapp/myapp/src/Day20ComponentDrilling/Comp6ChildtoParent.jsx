import React from 'react'

const Comp6ChildtoParent = (p) => {
  return (
    <div>
        <p>Para of child </p>
        {/* Calling content inside <> */}
        <p>{p.children}</p>
    </div>
  )
}

export default Comp6ChildtoParent