import React from "react";
import PriceFilter from "./PriceFilter"; // Import your PriceFilter component
import StyleFilter from "./StyleFilter";
import TypeFilter from "./TypeFilter";

function Filters({ onPriceFilterChange, onStyleFilterChange }) {

  const handlePriceFilterChange = (low, high, isChecked) => {
    console.log("Price filter changed:", low, high, isChecked);
    const filterObject = {
      value: {
        gte: low,
        lte: high,
      },
    };

    onPriceFilterChange(filterObject);
  };

  const handleStyleFilterChange = (style, isChecked) => {
    const filterObject ={
      value: style
    }

    onStyleFilterChange(filterObject)
  }

  return (
    <div>
      {/* Pass gte, lte, setGte, and setLte to PriceFilter */}
      <PriceFilter onPriceFilterChange={handlePriceFilterChange} />
      <StyleFilter onStyleFilterChange={handleStyleFilterChange}/>
      <TypeFilter />
    </div>
  );
}

export default Filters;
