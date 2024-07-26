import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'; // Import the CSS for styling

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Welcome to Our Shopping Website!</h1>
        <p>Discover the best jewelry for all occasions.</p>
        <a href="/products" className="cta-button">Shop Now</a>
      </div>
      <Link to="/cart" className="cart-button">Cart</Link>
    </div>
  );
}

export default Banner;
