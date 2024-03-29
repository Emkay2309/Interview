import React from 'react'
import './useReducer.css'
import {useState , useReducer} from 'react'


const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    NEW_USER_INPUT: 'newUserInput',
    TG_COLOR: 'tgColor'
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION.INCREMENT:
        return { ...state, count: state.count + 1 };
      case ACTION.DECREMENT:
        return { ...state, count: state.count - 1 };
      case ACTION.NEW_USER_INPUT:
        return { ...state, userInput: action.payload };
      case ACTION.TG_COLOR:
        return { ...state, color: !state.color };
      default:
        throw new Error();
    }
  }

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false })
            //count , setCount
  return (
    <main className="container" >
      <input
        type="text"
        value={state.userInput}
        onChange={(e) => dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })}
      />
      <p style={{ color: state.color ? '#FFF' : 'red' }}>{state.userInput}</p>
      <p>{state.count}</p>
      <section>
        <button onClick={(() => dispatch({ type: ACTION.DECREMENT }))}>-</button>
        <button onClick={(() => dispatch({ type: ACTION.INCREMENT }))}>+</button>
        <button onClick={(() => dispatch({ type: ACTION.TG_COLOR }))}>Color</button>
      </section>
      <br /><br />
      
    </main>
  )
}

export default UseReducer