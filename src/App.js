import React, { useState, useEffect } from "react";
import "./Components/filters/filters.css";
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
    const isFilterInArray = priceFilter.some(
      (filter) =>
        filter.value.gte === filterObject.value.gte &&
        filter.value.lte === filterObject.value.lte
    );

    if (isFilterInArray) {
      const newPriceFilter = priceFilter.filter(
        (filter) =>
          filter.value.gte !== filterObject.value.gte ||
          filter.value.lte !== filterObject.value.lte
      );
      setPriceFilter(newPriceFilter);
    } else {
      setPriceFilter([...priceFilter, filterObject]);
    }
  };

  const handleStyleFilterChange = (filterObject) => {
    const isFilterInArray = styleFilter.some(
      (filter) => filter.value === filterObject.value
    );

    if (isFilterInArray) {
      const newStyleFilter = styleFilter.filter(
        (filter) => filter.value !== filterObject.value
      );
      setStyleFilter(newStyleFilter);
    } else {
      setStyleFilter([...styleFilter, filterObject]);
    }
  };

  useEffect(() => {
    const savedPriceFilter = JSON.parse(localStorage.getItem("priceFilter"));
    const savedStyleFilter = JSON.parse(localStorage.getItem("styleFilter"));

    if (savedPriceFilter) {
      setPriceFilter(savedPriceFilter);
    }
    if (savedStyleFilter) {
      setStyleFilter(savedStyleFilter);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("priceFilter", JSON.stringify(priceFilter));
    localStorage.setItem("styleFilter", JSON.stringify(styleFilter));
  }, [priceFilter, styleFilter]);

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
