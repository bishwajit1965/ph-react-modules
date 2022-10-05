import React from "react";
import { Link } from "react-router-dom";

import "./FriendsData.css";

const FriendsData = ({ friend }) => {
  const { id, name, username, email, phone, address } = friend;
  return (
    <div className="friends-detail-data">
      <h3>Id: {id}</h3>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <address>Address: {address.street}</address>
      <button>
        {" "}
        <Link to={`/friend/${id}`}>{username}</Link>{" "}
      </button>
    </div>
  );
};

export default FriendsData;
