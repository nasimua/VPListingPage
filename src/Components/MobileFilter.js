import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import Filters from "./Filters";
import Sort from "./Sort";
import Hamburger from "hamburger-react";

function MobileFilter() {
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

  return (
    <div ref={menuRef} className="mobile-filter">
      <div className="sort-filter-strip">
        <div className="m-filter-btn">
          <h3>Filter By</h3>
          <Hamburger toggled={showFilters} toggle={handleBurgerClick} />
        </div>

        <div  className="m-sort-dropdown">
          <Sort />
        </div>
      </div>
      <div className={`filters ${showFilters ? "active" : ""}`}>
        <Filters />
      </div>
    </div>
  );
}

export default MobileFilter;
