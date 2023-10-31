import React from "react";
import "./productList.css";
import { ProdList, Prod } from "./ProductsList.styles";

function ProductList({ products }) {
  return (
    <ProdList>
      {products.map((product) => {
        return (
          <Prod key={product.id}>
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
