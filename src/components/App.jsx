import React, { useState } from "react";

function App() {
  const [input, setInput] = useState();
  const [array, setArray] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }
  function handleClick() {
    setArray(prev =>([...prev,input]))}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {array.map(x=>{
          return <li>{x}</li>
        })}
        </ul>
      </div>
    </div>
  );
}

export default App;
