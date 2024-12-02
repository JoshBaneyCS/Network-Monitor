import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
      <Link to="/admin/dashboard" style={{ margin: "0 10px", color: "white" }}>Admin Dashboard</Link>
    </div>
  );
}

export default Navbar;
