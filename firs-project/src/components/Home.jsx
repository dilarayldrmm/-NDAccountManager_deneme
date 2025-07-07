import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Eğer CSS dosyan varsa

function Home({ userRole }) {
  const [activeTab, setActiveTab] = useState("personel");

  const renderContent = () => {
   if (activeTab === "personel") {
  return (
    <div>
      <h3>Kaydedilen Hesaplar</h3>
      <ul className="account-list">
        {/* Örnek sabit veri, sonra burası API'den alınabilir */}
        <li>Gmail - kullanici@gmail.com</li>
        <li>LinkedIn - isimsoyisim</li>
      </ul>

      <div className="add-account-form">
        <h4>Yeni Hesap Ekle</h4>
        <form>
          <input type="text" placeholder="Platform Adı (ör: Gmail)" />
          <input type="text" placeholder="Kullanıcı Adı veya Email" />
          <input type="password" placeholder="Şifre" />
          <button type="submit">Kaydet</button>
        </form>
      </div>
    </div>
  );
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