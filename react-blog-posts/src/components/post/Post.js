import React from "react";

import "./Post.css";

const Post = (props) => {
  return (
    <div className="post-content">
      <h3>{props.post.title}</h3>
      <p>{props.post.body.slice(0, 130)}...</p>
    </div>
  );
};

export default Post;
