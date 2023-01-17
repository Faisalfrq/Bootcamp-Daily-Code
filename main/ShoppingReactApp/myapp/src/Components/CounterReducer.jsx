import React, { useReducer } from 'react'
//import reducer from './Reducer'




const CounterReducer = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return (state = 0);
      default:
        return state;
    }
  };

    const [state,dispatch]=useReducer(reducer,0)
    console.log("counter")
  return (
    <>
      <h1>{state === 0 ? "Zero" : state}</h1>
      <button
        className="btn btn-dark"
        onClick={() => {
          dispatch({ type: "increment", payload: "" });
        }}
      >
        Increase
      </button>
      <button
        className="btn btn-dark"
        onClick={() => {
          dispatch({ type: "decrement", payload: "" });
        }}
      >
        Decrease
      </button>
      <button
        className="btn btn-dark"
        onClick={() => {
          dispatch({ type: "reset", payload: "" });
        }}
      >
        Reset
      </button>
    </>

  )
}

export default CounterReducer
