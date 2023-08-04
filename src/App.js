import React from "react";
import "./App.css";
import data from "./example-payload.json";
import ProductList from "./Components/ProductList";
import Filters from "./Components/Filters";
import Sort from "./Components/Sort";
import MobileFilter from "./Components/MobileFilter";

function App() {
  // destructure products array from JSON data
  const { products } = data.item;

  return (
    <div className="App">
      <section className="filter-by">
        <div className="reg-filters">
          <h2>Filter By</h2>
          <div className="filters">
            <Filters />
          </div>
        </div>
        <MobileFilter />
      </section>

      <section className="listings">
        <div className="reg-sort">
          <Sort />
        </div>

        {/* render ProductList Component, passing 'products' as prop */}
        <ProductList products={products} />
      </section>
    </div>
  );
}

export default App;
