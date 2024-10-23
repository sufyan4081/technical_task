import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="head">
        <div className="nav-logo"></div>
        <h1>Inventory Management System</h1>
      </div>
      <div>
        <a href="/">Home</a>
      </div>
    </nav>
  );
};

export default Navbar;
