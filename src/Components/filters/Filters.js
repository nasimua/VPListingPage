import React from "react";
import PriceFilter from "./PriceFilter"; // Import your PriceFilter component
import StyleFilter from "./StyleFilter";
import TypeFilter from "./TypeFilter";

function Filters({ gte, lte, setGte, setLte }) {
  return (
    <div>
      {/* Pass gte, lte, setGte, and setLte to PriceFilter */}
      <PriceFilter gte={gte} lte={lte} setGte={setGte} setLte={setLte} />
      <StyleFilter />
      <TypeFilter />
    </div>
  );
}

export default Filters;
