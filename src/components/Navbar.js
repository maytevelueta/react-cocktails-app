import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
     <nav className="navbar-center">
        <Link to="/">
          <h1>Search a Drink!</h1>
        </Link>
        <div className="nav-links">
            <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
            <Link to="/about">About</Link>
        </div>
     </nav>
    </div>
  );
};

export default Navbar;
