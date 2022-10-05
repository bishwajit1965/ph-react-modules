import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  const { name, username, phone, email, address, company, website } = friend;
  return (
    <>
      <div className="friend-details"></div>
      <h3>Name: {name}</h3>
      <p>User name: {username}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <address>
        Address: {address.street} <br />
        Suite: {address.suite} <br /> City: {address.city} <br />
        Zip-code: {address.zipcode} <br />
        Company: {company.name} <br />
        Company catch phrase: {company.catchPhrase} <br />
      </address>
    </>
  );
};

export default FriendDetails;
