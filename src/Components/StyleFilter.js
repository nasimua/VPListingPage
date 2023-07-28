import React from 'react';
import "../App.css";

function StyleFilter() {
  return (
    <div className='filter'>
      <h3>Style</h3>
      <label>
        <input type="checkbox" />
        Traditional
      </label>
      <br></br>
      <label>
        <input type="checkbox" />
        Modern
      </label>
      <br></br>
    </div>
  )
}

export default StyleFilter