import React from "react";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = () => {
  const post = useLoaderData();
  console.log(post);
  const { title, body } = post;
  return (
    <div>
      <h2>Title: {title}</h2>
      <p>Body: {body}</p>
      <NavLink className="detail-post-link" to="/posts">
        View all Posts <i class="fas fa-arrow-right"></i>
      </NavLink>
    </div>
  );
};

export default SinglePost;
