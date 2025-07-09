import React from "react";
import "../styles/MainLayout.css";

export default function MainLayout() {
  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>NDAccount</h2>
        <button>Ana Sayfa</button>
        <button>Hesap Bilgileri</button>
        <button>Ayarlar</button>
      </div>

      {/* İçerik */}
      <div className="content">
        <div className="tabs">
          <div className="tab active">Personel</div>
          <div className="tab">Paylaşılanlar</div>
        </div>

        <div className="card">
          <h3>Kaydedilen Hesaplar</h3>
          <ul>
            <li>Gmail - kullanici@gmail.com</li>
            <li>LinkedIn - isimsoyisim</li>
          </ul>

          <h3>Yeni Hesap Ekle</h3>
          <form className="form">
            <input type="text" placeholder="Platform Adı (ör: Gmail)" />
            <input type="text" placeholder="Kullanıcı Adı veya Email" />
            <input type="password" placeholder="Şifre" />
            <button type="submit">Kaydet</button>
          </form>
        </div>
      </div>
    </div>
  );
}