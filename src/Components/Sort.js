import React from "react";

function Sort() {
  return (
    <div className="sort">
        <select>
          <option>Recommended</option>
          <option>Lowest Price</option>
          <option>Highest Price</option>
          <option>Highest discount</option>
        </select>
    </div>
  );
}

export default Sort;
