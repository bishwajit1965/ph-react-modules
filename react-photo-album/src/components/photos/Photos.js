import { useState, useEffect } from "react";
import React from "react";
import PhotoAlbum from "../photoAlbum/PhotoAlbum";

export const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div>
      <h1>Total Photos: {photos.length}</h1>
      {photos.slice(0, 50).map((photo) => (
        <PhotoAlbum photo={photo} />
      ))}
    </div>
  );
};
