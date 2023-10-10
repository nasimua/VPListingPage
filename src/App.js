import React, { useState, useEffect } from "react";
// import "./App.css";
// import styled from "styled-components";
import "./Components/filters/filters.css";
// import data from "./example-payload.json";
import ProductList from "./Components/products/ProductList";
import Filters from "./Components/filters/Filters";
import Sort from "./Components/filters/Sort";
import MobileFilter from "./Components/filters/MobileFilter";
import {
  AppContainer,
  LeftSection,
  RightSection,
  MobileFilterSection,
  Pagination,
  PageButton,
} from "./App.styles";

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
      value: "",
    },
  ]);

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

    // console.log(priceFilter, filterObject);
  };

  const handleStyleFilterChange = (filterObject) => {
    // Check if the filter object is already in the priceFilter array
    const isFilterInArray = styleFilter.some(
      (filter) => filter.value === filterObject.value
    );

    if (isFilterInArray) {
      // If the object is already in the array, remove it
      const newStyleFilter = styleFilter.filter(
        (filter) => filter.value !== filterObject.value
      );
      setStyleFilter(newStyleFilter);
    } else {
      // If the object is not in the array, add it
      setStyleFilter([...styleFilter, filterObject]);
    }

    // console.log(styleFilter);
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
                toiletStyle: styleFilter,
              },
            }),
          }
        );

        const data = await response.json();
        // console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [sortOption, pageNum, priceFilter, styleFilter]);

  useEffect(() => {
    localStorage.setItem("priceFilter", JSON.stringify(priceFilter));
    localStorage.setItem("styleFilter", JSON.stringify(styleFilter));
  }, [priceFilter, styleFilter]);

  useEffect(() => {
    const savedPriceFilter = JSON.parse(localStorage.getItem('priceFilter'))
    const savedStyleFilter = JSON.parse(localStorage.getItem('styleFilter'))

    if (savedPriceFilter) {
      setPriceFilter(savedPriceFilter)
    }
    if (savedStyleFilter) {
      setStyleFilter(savedStyleFilter)
    }
  
    console.log(savedPriceFilter)
  }, [])

  return (
    <AppContainer>
      <LeftSection>
        <MobileFilterSection>
          <MobileFilter
            onPriceFilterChange={handlePriceFilterChange}
            onStyleFilterChange={handleStyleFilterChange}
          />
          <Sort onSortChange={handleSortChange} />
        </MobileFilterSection>
        <div className="reg-filters">
          <h2>Filter By</h2>
          <div className="filters">
            <Filters
              onPriceFilterChange={handlePriceFilterChange}
              onStyleFilterChange={handleStyleFilterChange}
            />
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
