import React from "react";
import "../App.css";

// create functional component that takes a prop 'products', which is an array containing product data
function ProductList({ products }) {
  return (
    <div className="product-list">
      {/* loop through each product in the array using .map, creating a div for each product with a unique key */}

      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            {/* render information from array as required i.e. prouct name, image, price, etc. */}
            <img
              src={product.image.url}
              alt={product.image.attributes.imageAltText}
            />
            <div className="product-card">
              <img
                src={product.brand.brandImage.url}
                alt={product.brand.brandImage.attributes.imageAltText}
              />
              <p>{product.productName}</p>
              <p className="price">£{product.price.priceIncTax}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
