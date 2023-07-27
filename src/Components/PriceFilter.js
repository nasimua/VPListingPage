import React from "react";

function PriceFilter() {
  return (
    <div className="filter">
      <h3>Price</h3>
      <label>
        <input type="checkbox" />
        £0 - £200
      </label>
      <br></br>
      <label>
        <input type="checkbox" />
        £200 - £400
      </label>
      <br></br>
      <label>
        <input type="checkbox" />
        £400 - £600
      </label>
      <br></br>
    </div>
  );
}

export default PriceFilter;
