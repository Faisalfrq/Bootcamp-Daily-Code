import React from 'react'
import { useSelector } from 'react-redux'

const Child2 = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
        <span>Child 2 : </span>
        <span>{count}</span>
    </div>
  )
}

export default Child2
