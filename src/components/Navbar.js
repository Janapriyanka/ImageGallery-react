import React, { useState } from "react";

const Navbar = ({
  categories,
  setFilter,
  filter,
  search,
  setSearch,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">

      <h2>Image Gallery</h2>

      {/* 🔍 SEARCH + MENU */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </div>

      {/* 🖥️ DESKTOP FILTERS */}
      <div className="filters desktop">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔲 OVERLAY */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* 📱 MOBILE SIDE MENU */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        
        <span className="close-menu" onClick={() => setMenuOpen(false)}>
          ✕
        </span>

        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => {
                setFilter(cat);
                setMenuOpen(false);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Navbar;