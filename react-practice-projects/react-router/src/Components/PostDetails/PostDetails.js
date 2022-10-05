import React from "react";
import { Link } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = ({ post }) => {
  const { id, title, body } = post;
  return (
    <>
      <div className="posts">
        <h2>{title}</h2>
        <p>{body}</p>
        <Link className="detail-post-link" to={`/post/${id}`}>
          View post Details <i class="fas fa-eye"></i>
        </Link>
      </div>
    </>
  );
};

export default PostDetails;
