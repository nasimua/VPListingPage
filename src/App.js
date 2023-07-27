import React from "react";
import "./App.css";
import data from "./example-payload.json";
import ProductList from "./Components/ProductList";
import Filters from "./Components/Filters";
import Sort from "./Components/Sort";

function App() {
  // destructure products array from JSON data
  const { products } = data.item;

  return (
    <div className="App">
      <section className="filter-by">
        <h2>Filter By</h2>
        <div className="filters">
          <Filters />
        </div>
      </section>
      <section className="listings">
        <div className="sort">
          <Sort />
        </div>
        
        <div className="product-list">
          <div className="products">
            {/* render ProductList Component, passing 'products' as prop */}
            <ProductList products={products} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
