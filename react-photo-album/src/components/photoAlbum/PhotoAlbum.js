import React from "react";

import "./PhotoAlbum.css";
const PhotoAlbum = (props) => {
  return (
    <div className="photo-album">
      <div>
        {/* <h5 key={props.photo.id}>{props.photo.title}</h5> */}
        <img src={props.photo.thumbnailUrl} alt="photos" />
      </div>
    </div>
  );
};

export default PhotoAlbum;
