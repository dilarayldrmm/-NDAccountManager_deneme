import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="navbar">
      <button
        className={activeTab === "personel" ? "active" : ""}
        onClick={() => setActiveTab("personel")}
      >
        Personel
      </button>
      <button
        className={activeTab === "paylasilanlar" ? "active" : ""}
        onClick={() => setActiveTab("paylasilanlar")}
      >
        Paylaşılanlar
      </button>
    </div>
  );
};

export default Navbar;