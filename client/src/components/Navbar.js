import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
