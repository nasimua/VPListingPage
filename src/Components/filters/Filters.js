import React from "react";
import PriceFilter from "./PriceFilter";
import StyleFilter from "./StyleFilter";
import TypeFilter from "./TypeFilter";

function Filters({ onPriceFilterChange, onStyleFilterChange }) {
  const handlePriceFilterChange = (low, high, isChecked) => {
    const filterObject = {
      value: {
        gte: low,
        lte: high,
      },
    };

    onPriceFilterChange(filterObject);
  };

  const handleStyleFilterChange = (style, isChecked) => {
    const filterObject = {
      value: style,
    };

    onStyleFilterChange(filterObject);
  };

  return (
    <div>
      <PriceFilter onPriceFilterChange={handlePriceFilterChange} />
      <StyleFilter onStyleFilterChange={handleStyleFilterChange} />
      <TypeFilter />
    </div>
  );
}

export default Filters;
