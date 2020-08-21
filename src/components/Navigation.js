import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <div className="nav-links">
      <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/search">Search</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}
