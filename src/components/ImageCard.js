import React from "react";

const ImageCard = ({ image,onClick }) => {
  return (
    <div className="card">
      
      <div className="img-wrapper">
        <img src={image.url} alt={image.title} />

        {/* Overlay */}
        <div className="overlay">
          <span className="category">{image.category}</span>

          <div
  className="zoom-icon"
  onClick={() => onClick(image)}
>
  🔍
</div>

          <div className="overlay-text">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ImageCard;