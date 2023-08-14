import React, { useState, useEffect } from "react";
// import "./App.css";
import styled from "styled-components";
import "./Components/filters/filters.css";
// import data from "./example-payload.json";
import ProductList from "./Components/products/ProductList";
import Filters from "./Components/filters/Filters";
import Sort from "./Components/filters/Sort";
import MobileFilter from "./Components/filters/MobileFilter";

// function App() {
//   // destructure products array from JSON data
//   // static data
//   const { products } = data.item;

//   return (
//     <div className="App">
//       <section className="filter-by">
//         <div className="reg-filters">
//           <h2>Filter By</h2>
//           <div className="filters">
//             <Filters />
//           </div>
//         </div>
//         <MobileFilter />
//       </section>

//       <section className="listings">
//         <div className="reg-sort">
//           <Sort />
//         </div>

//         {/* render ProductList Component, passing 'products' as prop */}
//         <ProductList products={products} />
//       </section>
//     </div>
//   );
// }

const AppContainer = styled.div`
  margin: 0 auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 15px;

  @media only screen and (max-width: 1070px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
  }

  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftSection = styled.section`
  margin: 20px 5px;
`;

const RightSection = styled.section`
  margin: 20px 5px;
`;

function App() {
  // destructure products array from JSON data
  // static data
  // const { products } = data.item;

  // fteching data from a POST endpoint API
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: "toilets",
            pageNumber: 0,
            size: 0,
            additionalPages: 0,
            sort: 1,
          }),
        }
      );

      const data = await response.json();
      console.log(data.products)
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <AppContainer>
      <LeftSection>
        <div className="reg-filters">
          <h2>Filter By</h2>
          <div className="filters">
            <Filters />
          </div>
        </div>
        <MobileFilter />
      </LeftSection>

      <RightSection>
        <div className="reg-sort">
          <Sort />
        </div>

        {/* render ProductList Component, passing 'products' as prop */}
        <ProductList products={products} />
      </RightSection>
    </AppContainer>
  );
}

export default App;
