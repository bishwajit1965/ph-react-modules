import React from "react";
import { useLoaderData } from "react-router-dom";
import FriendsData from "../FriendsData/FriendsData";

import "./Friends.css";

const Friends = () => {
  const friends = useLoaderData();
  return (
    <>
      <h1>I have {friends.length} friends!!!</h1>
      <div className="container">
        {friends.map((friend) => (
          <FriendsData key={friend.id} friend={friend} />
        ))}
      </div>
    </>
  );
};

export default Friends;
