import React from "react";
import "./productList.css";
import { styled } from "styled-components";

const ProdList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media only screen and (max-width: 1070px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media only screen and (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  @media only screen and (max-width: 300px) {
      display: grid;
      grid-template-columns: 1fr;
  
  }
`;

const Prod = styled.div`
  width: 270px;
  margin: 20px 0;
  background-color: #fff;

  @media only screen and (max-width: 600px) {
      width: 230px;
  }

  @media only screen and (max-width: 450px) {
      width: 10em;
  }

  @media only screen and (max-width: 300px) {
      width: 260px;
  }
`;

// create functional component that takes a prop 'products', which is an array containing product data
function ProductList({ products }) {
  return (
    <ProdList>
      {/* loop through each product in the array using .map, creating a div for each product with a unique key */}

      {products.map((product) => {
        return (
          <Prod key={product.id}>
            {/* render information from array as required i.e. prouct name, image, price, etc. */}
            <img
              src={product.image.url}
              alt={product.image.attributes.imageAltText}
              className="product-img"
            />
            <div className="product-card">
              <img
                src={product.brand.brandImage.url}
                alt={product.brand.brandImage.attributes.imageAltText}
              />
              <p>{product.productName}</p>
              <p className="price">£{product.price.priceIncTax}</p>
            </div>
          </Prod>
        );
      })}
    </ProdList>
  );
}

export default ProductList;
