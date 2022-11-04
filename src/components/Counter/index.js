import React, { useReducer, useState } from "react";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY = "INCREMENT BY";

const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decrement = () => {
  return {
    type: DECREMENT,
  };
};

const increment_by = (amount) => {
  return {
    type: INCREMENT_BY,
    payload: amount,
  };
};
const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("here");
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT_BY:
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [counterState, dispatchCounter] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  return (
    <>
      <h1>{counterState.count}</h1>
      <button
        onClick={() => {
          dispatchCounter(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatchCounter(decrement());
        }}
      >
        Decrement
      </button>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button
        onClick={() => {
          dispatchCounter(increment_by(+input));
        }}
      >
        Increment By
      </button>
    </>
  );
};

export default Counter;
