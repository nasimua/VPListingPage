import React from "react";
import "./filters.css";

function PriceFilter({ onPriceFilterChange }) {
  const handleCheckboxChange = (low, high, isChecked) => {
    onPriceFilterChange(low, high, isChecked);
  };

  return (
    <div className="filter">
      <h3>Price</h3>
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleCheckboxChange(0, 200, e.target.checked)}
        />
        £0 - £200
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleCheckboxChange(200, 400, e.target.checked)}
        />
        £200 - £400
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleCheckboxChange(400, 600, e.target.checked)}
        />
        £400 - £600
      </label>
      <br />
    </div>
  );
}

export default PriceFilter;
