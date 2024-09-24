
import { useState, useReducer } from "react";
import React from 'react';
import './calc_css.css';

const initialState = {
  prev: "",
  op: "",
  input: " ",
  result: " ",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":

      return { ...state, input: state.input + action.value };
    case "CLEAR":
      return { input: "", prev: "", op: "", result: " " };
    case "OPERATION":


      if (state.result != " ") {
        return { ...state, prev: state.result, op: action.value, input: "" };
      }
      else
        return { ...state, prev: state.input, op: action.value, input: "" };
    case "RESULT":
      if (state.op == "+") {
        return { result: parseInt(state.prev) + parseInt(state.input) };
      }
      if (state.op == "-") {
        return { result: parseInt(state.prev) - parseInt(state.input) };
      }
      if (state.op == "*") {
        return { result: parseInt(state.prev) * parseInt(state.input) };
      }
      if (state.op == "/") {
        if (parseInt(state.input) == 0) {
          return { result: "mistake" }
        }
        else return { result: parseInt(state.prev) / parseInt(state.input) };
      }
    default:
      return state;
  }
}

function App() {






  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (value) => {
    dispatch({ type: "ADD", value });
  }

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  }
  const handleOperation = (value) => {

    dispatch({ type: "OPERATION", value });

  }
  const handleResult = () => {
    dispatch({ type: "RESULT" });
  }

  return (
    <div className="calculator">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      < div className="window">
        <p className="output">
          {state.result !== "" ? (
            <p className="result">{state.result}</p>
          ) : (
            <p className="previous">{state.prev}</p>
          )}

          <p className="op">{state.op}</p>
          <p className="current">{state.input}</p>
        </p>
      </div>
      <div className="Buttons">

        <button onClick={() => handleInput(1)}>1</button>
        <button onClick={() => handleInput(2)}>2</button>
        <button onClick={() => handleInput(3)}>3</button>
        <button onClick={() => handleInput(4)}>4</button>
        <button onClick={() => handleInput(5)}>5</button>
        <button onClick={() => handleInput(6)}>6</button>
        <button onClick={() => handleInput(7)}>7</button>
        <button onClick={() => handleInput(8)}>8</button>
        <button onClick={() => handleInput(9)}>9</button>
        <button onClick={() => handleInput(0)}>0</button>

        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
        <button onClick={() => handleResult()}>=</button>
        <button id="clear" onClick={() => handleClear()}>clear</button>
      </div>

    </div>

  );
}

export default App;
