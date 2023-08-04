import React from 'react';
import "./filters.css";

function TypeFilter() {
  return (
    <div className='filter'>
      <h3>Type</h3>
      <label>
        <input type="checkbox" />
        Floor Standing
      </label>
      <br></br>
      <label>
        <input type="checkbox" />
        Wall Hung
      </label>
      <br></br>
    </div>
  )
}

export default TypeFilter