import React from "react";
import { useLoaderData } from "react-router-dom";
import PostDetails from "../PostDetails/PostDetails";

import "./Post.css";

const Post = () => {
  const posts = useLoaderData();
  return (
    <>
      {posts.map((post) => (
        <PostDetails kry={post.id} post={post} />
      ))}
    </>
  );
};

export default Post;
