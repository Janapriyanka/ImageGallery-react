import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import imagesData from "./data/images";

export default function App() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  const categories = ["All", "Nature", "Beach", "Desert", "Animals"];

  // 🔍 FILTER + SEARCH
  const filteredImages = imagesData.filter((img) => {
    const matchCategory = filter === "All" || img.category === filter;
    const matchSearch = img.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  // ⬅️➡️ SLIDER
  const currentIndex = filteredImages.findIndex(
    (img) => img.id === selectedImage?.id
  );

  const prevImage = (e) => {
    e.stopPropagation(); // ❗ IMPORTANT FIX
    const index =
      (currentIndex - 1 + filteredImages.length) %
      filteredImages.length;
    setSelectedImage(filteredImages[index]);
  };

  const nextImage = (e) => {
    e.stopPropagation(); // ❗ IMPORTANT FIX
    const index =
      (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[index]);
  };

  return (
    <div className={dark ? "dark" : ""}>
      
      {/* NAVBAR */}
      <Navbar
        categories={categories}
        setFilter={setFilter}
        filter={filter}
        search={search}
        setSearch={setSearch}
        dark={dark}
        setDark={setDark}
      />

      {/* GALLERY */}
      <Gallery
        images={filteredImages}
        setSelectedImage={setSelectedImage}
      />

      {/* FOOTER */}
      <Footer />

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
            />

            <div className="lightbox-text">
              <span className="lb-category">
                {selectedImage.category}
              </span>
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>

          {/* ⬅️➡️ NAVIGATION */}
          <button className="nav left" onClick={prevImage}>
            ‹
          </button>
          <button className="nav right" onClick={nextImage}>
            ›
          </button>

          {/* CLOSE */}
          <button
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation(); // ❗ FIX
              setSelectedImage(null);
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}