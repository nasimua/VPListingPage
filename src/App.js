import React from "react";
import "./App.css";
import "./Components/filters/filters.css";
import data from "./example-payload.json";
import ProductList from "./Components/products/ProductList";
import Filters from "./Components/filters/Filters";
import Sort from "./Components/filters/Sort";
import MobileFilter from "./Components/filters/MobileFilter";

function App() {
  // destructure products array from JSON data
  // static data
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
