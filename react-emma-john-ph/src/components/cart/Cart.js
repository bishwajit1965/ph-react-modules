import React from "react";

import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <h3>Order Summary </h3>
      {/* <p>{cart.length}</p> */}
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
  );
};

export default Cart;
