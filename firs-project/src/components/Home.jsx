import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Eğer CSS dosyan varsa

function Home({ userRole }) {
  const [activeTab, setActiveTab] = useState("personel");

  const renderContent = () => {
    if (activeTab === "personel") {
      return <div>Personel hesapları burada listelenir.</div>;
    } else if (activeTab === "shared") {
      return <div>Paylaşılan hesaplar burada listelenir.</div>;
    }
  };

  return (
    <div className="home-container">
      {/* Üst Menü */}
      <nav className="top-nav">
        <Link to="/account" className="nav-link">Hesap Bilgileri</Link>
        {userRole === "Manager" && (
          <Link to="/settings" className="nav-link">Ayarlar</Link>
        )}
      </nav>

      {/* Sekmeler */}
      <div className="tab-header">
        <button
          className={activeTab === "personel" ? "active" : ""}
          onClick={() => setActiveTab("personel")}
        >
          Personel
        </button>
        <button
          className={activeTab === "shared" ? "active" : ""}
          onClick={() => setActiveTab("shared")}
        >
          Paylaşılanlar
        </button>
      </div>

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Home;