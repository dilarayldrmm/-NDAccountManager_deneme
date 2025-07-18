import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MainLayout.css";

function Home({ userRole }) {
  const [activeTab, setActiveTab] = useState("personel");
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Veritabanından hesapları çek
    const fetchAccounts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/accounts");
        setAccounts(response.data);
      } catch (err) {
        setError("Veriler alınırken hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  const filteredAccounts = accounts.filter((acc) => {
    if (activeTab === "personel") {
      return acc.isShared === false;
    } else {
      return acc.isShared === true;
    }
  });

  const renderAccounts = () => {
    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (filteredAccounts.length === 0) return <p>Hiç hesap kaydı yok.</p>;

    return (
      <ul className="account-list">
        {filteredAccounts.map((acc) => (
          <li key={acc.id} className="account-card">
            <h4>{acc.platform}</h4>
            <p><strong>Kullanıcı Adı:</strong> {acc.username}</p>
            <p><strong>IP:</strong> {acc.ipAddress}</p>
            <p><strong>Kategori:</strong> {acc.category}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="home-container">
      <div className="tabs">
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

      <div className="tab-content">
        <h3>{activeTab === "personel" ? "Kaydedilen Hesaplar" : "Paylaşılan Hesaplar"}</h3>
        {renderAccounts()}
      </div>
    </div>
  );
}

export default Home;