import React from 'react';
import "./filters.css";

function StyleFilter({onStyleFilterChange}) {

  const handleCheckboxChange = (style, isChecked) => {
    onStyleFilterChange(style, isChecked)
  }
  
  return (
    <div className='filter'>
      <h3>Style</h3>
      <label>
        <input type="checkbox" 
        onChange={(e) => handleCheckboxChange('Traditional', e.target.checked)}/>
        Traditional
      </label>
      <br></br>
      <label>
        <input type="checkbox" 
        onChange={(e) => handleCheckboxChange('Modern', e.target.checked)}/>
        Modern
      </label>
      <br></br>
    </div>
  )
}

export default StyleFilter