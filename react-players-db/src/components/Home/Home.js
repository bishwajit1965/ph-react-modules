import React from "react";
import Players from "../Players/Players";
import "./Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data?.player);
      });
  }, [search]);
  //   console.log(players);

  return (
    <div>
      <div className="home-container">
        <div className="left-side">
          <h1>All Players</h1>
          <input
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name=""
            id=""
          />
          <button className="search-btn">Search</button>
          <div className="players-container">
            <Players players={players} cart={cart} setCart={setCart} />
          </div>
        </div>
        <div className="right-side">
          <div className="cart">
            <h1>Cart</h1>
            <hr />
            <ol>
              {cart.map((p) => (
                <li>
                  {p.strPlayer} &nbsp; &nbsp; {p.idPlayer}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
