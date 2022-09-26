import React from "react";
import { useEffect, useState } from "react";
import Product from "../product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const url = "products.json";
    fetch(url).then((response) =>
      response.json().then((data) => setProducts(data))
    );
  }, []);

  const handleAddToCart = (product) => {
    console.log(products);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      {/* <h1>Products: {products.length}</h1> */}
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <h3>Order Summary </h3>
        <p>{cart.length}</p>
        <div className="cart-details">
          <p>Total price: $1140</p>
          <p>Total Shopping Charge: $5</p>
          <p>Tax: $114</p>
        </div>

        <div className="clear-cart">
          <a href="/clearCart">
            Clear Cart <i className="fas fa-trash"></i>{" "}
          </a>
        </div>
        <div className="review-order">
          <a href="/clearCart">
            Review Order <i className="fas fa-arrow-right"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shop;
