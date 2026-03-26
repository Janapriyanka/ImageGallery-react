import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-col brand">
          <h2>📸 Lens Gallery</h2>
          <p>
            A curated visual archive of the world's most breathtaking places,
            captured through passionate photographers.
          </p>

          <div className="socials">
            <span>📷</span>
            <span>🐦</span>
            <span>📌</span>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="footer-col">
          <h4>Explore</h4>
          <a href="/">Nature</a>
          <a href="/">Architecture</a>
          <a href="/">Wildlife</a>
          <a href="/">Seascape</a>
          <a href="/">Astronomy</a>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <a href="/">About Us</a>
          <a href="/">Our Mission</a>
          <a href="/">Careers</a>
          <a href="/">Press Kit</a>
        </div>

        {/* LEGAL */}
        <div className="footer-col">
          <h4>Legal</h4>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
          <a href="/">Cookie Settings</a>
          <a href="/">Licensing</a>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col newsletter">
          <h4>Stay Inspired</h4>
          <p>Get weekly curated collections delivered to your inbox.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="your@email.com" />
            <button>Subscribe</button>
          </div>

          <small>No spam. Unsubscribe anytime.</small>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2026 Lens Gallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;