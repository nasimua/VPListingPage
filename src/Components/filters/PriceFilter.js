import React from "react";
import "./filters.css";

function PriceFilter({ gte, lte, setGte, setLte }) {
  const handleCheckboxChange = (min, max) => {
    if (isRangeSelected(min, max)) {
      // If the checkbox is already checked with the same values, uncheck it
      setGte(null);
      setLte(null);
    } else {
      // If the checkbox is not already checked, toggle the gte and lte values
      setGte(min);
      setLte(max);
    }
  };

  const isRangeSelected = (min, max) => {
    return gte === min && lte === max;
  };

  return (
    <div className="filter">
      <h3>Price</h3>
      <label>
        <input
          type="checkbox"
          checked={isRangeSelected(0, 200)}
          onChange={() => handleCheckboxChange(0, 200)}
        />
        £0 - £200
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isRangeSelected(200, 400)}
          onChange={() => handleCheckboxChange(200, 400)}
        />
        £200 - £400
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isRangeSelected(400, 600)}
          onChange={() => handleCheckboxChange(400, 600)}
        />
        £400 - £600
      </label>
      <br />
    </div>
  );
}

export default PriceFilter;
