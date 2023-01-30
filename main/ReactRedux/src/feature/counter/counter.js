import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Child1 from './Child1.js'
import Child2 from './Child2'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value) // accessing and assigning value/element we want to update
  const dispatch = useDispatch() // calls the function which responds to the reducer we want 

  

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <Child1/>
        <Child2/>
      </div>
    </div>
  )
}