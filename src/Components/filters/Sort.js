import React from "react";

function Sort({ onSortChange }) {
  const handleSortChange = (e) => {
    const selectSortOption = e.target.value;
    onSortChange(selectSortOption);
  };
  return (
    <div className="sort">
      <select onChange={handleSortChange}>
        <option value={1}>Recommended</option>
        <option value={2}>Lowest Price</option>
        <option value={3}>Highest Price</option>
        <option value={4}>Highest discount</option>
      </select>
    </div>
  );
}

export default Sort;
