import React from "react";
import "./SinglePlayer.css";

const SinglePlayer = ({ player, cart, setCart }) => {
  const { idPlayer, strPlayer, strNationality, strDescription, strCutout } =
    player;

  const handleAddToCart = () => {
    const data = { idPlayer, strPlayer, strNationality, price: 120 };
    if (cart) {
      const newPlayer = [...cart, data];
      setCart(newPlayer);
    }
  };
  console.log(cart);
  return (
    <div className="card">
      <img src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      <p>{strNationality}</p>
      <p>{strDescription}</p>
      <p>{idPlayer}</p>
      <button type="button" className="delete-button">
        Delete
      </button>
      &nbsp;
      <button
        type="button"
        onClick={handleAddToCart}
        className="add-to-cart-button"
      >
        Add to cart
      </button>
      &nbsp;
      <button type="button" className="bookmark-button">
        Book mark
      </button>
    </div>
  );
};

export default SinglePlayer;
