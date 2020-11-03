import React, { useState, useReducer } from 'react';
import {reducer, initialValue} from './reducer';
import TaskList from './components/TaskList';
import './App.css';



function App() {

  const [state, dispatch] = useReducer(reducer, initialValue);
  const [text, setText] = useState("");

  const onSubmit = e => {
    console.log(state);
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: text });
    setText("")
  }

  const clearComplete = e => {
    e.preventDefault();
    dispatch({type: "CLEAR_TASKS"})
  }
  
  return (
    <div>
      <h1>To-Do App</h1>

      {state.tasks.map((item, idx) => (
        <div
          key={item.id}
          onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: item.id})}
          style={{
            textDecoration: item.completed ? "line-through" : ""
          }}
        > 
          {item.task}  
        </div>
      ))}

      <form onSubmit={onSubmit}>
        <input value={text} onChange={e => setText(e.target.value)}/>
      </form>

      <button onClick={onSubmit}>Submit!</button>

      <button onClick={clearComplete}>Clear</button>

    </div>
    
  )

}

export default App;
