import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">NDAccountManager</div>
      <div className="nav-links">
        <Link to="/home">Anasayfa</Link>
        <Link to="/account">Hesaplar</Link>
        <Link to="/settings">Ayarlar</Link>
      </div>
    </nav>
  );
}

export default Navbar;

