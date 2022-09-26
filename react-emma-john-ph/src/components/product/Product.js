import "./Product.css";

import React from "react";

const Product = (props) => {
  const { category, name, seller, price, ratings, img, quantity } =
    props.product;
 
  return (
    <div className="products-wrapper">
      <div className="product">
        <img src={img} alt="Product" />
        <div className="description-box">
          <p className="product-name"> {name}</p>
          <p className="product-price">Price:${price}</p>
          <div className="product-info">
            <p className="product-manufacturer">Manufacturer: {seller}</p>
            <p className="product-rating">Category: {category}</p>
            <p className="product-rating">Rating count: {ratings}</p>
            <p className="product-rating">Quantity: {quantity}</p>
          </div>
        </div>

        <button
          onClick={() => props.handleAddToCart(props.product)}
          type="button"
          className="add-to-cart-btn"
        >
          Add to cart <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
