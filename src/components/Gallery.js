import React from "react";
import ImageCard from "./ImageCard";

const Gallery = ({ images, setSelectedImage }) => {
  return (
    <div className="gallery">
      {images.map((img) => (
        <ImageCard
          key={img.id}
          image={img}
          onClick={setSelectedImage}
        />
      ))}
    </div>
  );
};

export default Gallery;