import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './counterSlice'

const Child1 = () => {
    //const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <span>Child 1: </span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      > Increment</button>
    </div>
  )
}

export default Child1
