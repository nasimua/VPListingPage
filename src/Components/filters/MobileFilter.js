import React, { useState, useEffect, useRef } from "react";
import "./filters.css";
import PriceFilter from "./PriceFilter";
import StyleFilter from "./StyleFilter";
import TypeFilter from "./TypeFilter";
import Hamburger from "hamburger-react";
import { styled } from "styled-components";

const BurgerFilter = styled.div`
  display: flex;
`;

function MobileFilter({ onPriceFilterChange, onStyleFilterChange }) {
  const [showFilters, setShowFilters] = useState(false);
  const menuRef = useRef();

  const handleBurgerClick = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };

  const handlePageClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowFilters(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handlePageClick);

    return () => {
      document.removeEventListener("click", handlePageClick);
    };
  }, []);

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
    <BurgerFilter ref={menuRef} className="mobile-filter">
      <div className="m-filter-btn">
        <h3>Filter By</h3>
        <Hamburger toggled={showFilters} toggle={handleBurgerClick} />
      </div>
      <div className={`filters ${showFilters ? "active" : ""}`}>
        <PriceFilter onPriceFilterChange={handlePriceFilterChange} />
        <StyleFilter onStyleFilterChange={handleStyleFilterChange} />
        <TypeFilter />
      </div>
    </BurgerFilter>
  );
}

export default MobileFilter;
