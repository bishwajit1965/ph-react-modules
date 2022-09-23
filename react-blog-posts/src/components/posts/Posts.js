import React, { useEffect, useState } from "react";

import Post from "../post/Post";
export const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Blog posts {posts.length}</h1>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
