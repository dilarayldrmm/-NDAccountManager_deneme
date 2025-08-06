import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menü</h2>
      <ul>
        <li>Ayarlar</li>
        <li>Hesap Yönetimi</li>
      </ul>
    </div>
  );
};

export default Sidebar;