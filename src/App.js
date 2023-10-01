import React, { useState, useEffect } from "react";
// import "./App.css";
import styled from "styled-components";
import "./Components/filters/filters.css";
// import data from "./example-payload.json";
import ProductList from "./Components/products/ProductList";
import Filters from "./Components/filters/Filters";
import Sort from "./Components/filters/Sort";
import MobileFilter from "./Components/filters/MobileFilter";

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

const MobileFilterSection = styled.div`
  display: none;

  @media only screen and (max-width: 750px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
`;

const Pagination = styled.div`
  display: flex;
  margin: 0 auto;
  width: 40%;
  align-items: center;
  justify-content: space-around;
`;

const PageButton = styled.button`
  background-color: #fff;
  padding: 15px 30px;
  border: 1px solid #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border: 1px solid black;
    transition: 0.2s;
  }
`;

function App() {
  // destructure products array from JSON data
  // static data
  // const { products } = data.item;

  // fteching data from a POST endpoint API
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const [priceFilter, setPriceFilter] = useState([
    {
      value: {
        gte: null,
        lte: null,
      },
    },
  ]);
  const [styleFilter, setStyleFilter] = useState([
    {
      value: ''
    }
  ])

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption);
  };

  const handlePageNext = () => {
    setPageNum(pageNum + 1);
  };
  const handlePagePrev = () => {
    if (pageNum > 0) {
      setPageNum(pageNum - 1);
    }
  };

  const handlePriceFilterChange = (filterObject) => {
    // Check if the filter object is already in the priceFilter array
    const isFilterInArray = priceFilter.some(
      (filter) =>
        filter.value.gte === filterObject.value.gte &&
        filter.value.lte === filterObject.value.lte
    );
  
    if (isFilterInArray) {
      // If the object is already in the array, remove it
      const newPriceFilter = priceFilter.filter(
        (filter) =>
          filter.value.gte !== filterObject.value.gte ||
          filter.value.lte !== filterObject.value.lte
      );
      setPriceFilter(newPriceFilter);
    } else {
      // If the object is not in the array, add it
      setPriceFilter([...priceFilter, filterObject]);
    }

    console.log(priceFilter)
  };

  const handleStyleFilterChange = (filterObject) => {
    // Check if the filter object is already in the priceFilter array
    const isFilterInArray = styleFilter.some(
      (filter) =>
        filter.value === filterObject.value
    );
  
    if (isFilterInArray) {
      // If the object is already in the array, remove it
      const newStyleFilter = styleFilter.filter(
        (filter) =>
          filter.value !== filterObject.value
      );
      setStyleFilter(newStyleFilter);
    } else {
      // If the object is not in the array, add it
      setStyleFilter([...styleFilter, filterObject]);
    }

    console.log(styleFilter)
  };
  

  useEffect(() => {
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
              pageNumber: pageNum,
              size: 0,
              additionalPages: 0,
              sort: sortOption,
              facets: {
                prices: priceFilter,
                toiletStyle: styleFilter 
              },
            }),
          }
        );

        const data = await response.json();
        console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [sortOption, pageNum, priceFilter, styleFilter]);

  return (
    <AppContainer>
      <LeftSection>
        <MobileFilterSection>
          <MobileFilter />
          <Sort onSortChange={handleSortChange} />
        </MobileFilterSection>
        <div className="reg-filters">
          <h2>Filter By</h2>
          <div className="filters">
            <Filters onPriceFilterChange={handlePriceFilterChange} onStyleFilterChange={handleStyleFilterChange}/>
          </div>
        </div>
      </LeftSection>

      <RightSection>
        <div className="reg-sort">
          <Sort onSortChange={handleSortChange} />
        </div>

        {/* render ProductList Component, passing 'products' as prop */}
        <ProductList products={products} />
        <Pagination className="pagination">
          <PageButton
            className="prev"
            onClick={handlePagePrev}
            disabled={pageNum === 1}
          >
            Prev
          </PageButton>
          <div>{pageNum}</div>
          <PageButton className="next" onClick={handlePageNext}>
            Next
          </PageButton>
        </Pagination>
      </RightSection>
    </AppContainer>
  );
}

export default App;
