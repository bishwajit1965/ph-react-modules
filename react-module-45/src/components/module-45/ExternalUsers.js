import { useState, useEffect } from "react";
import "./ExternalUsers.css";
import User from "./User";

export const ExternalUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Number of Users: {users.length}</h1>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};
