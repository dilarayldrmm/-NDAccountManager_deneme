import React, { useState, useEffect } from "react";
import AddAccountForm from "./addAccount";
import EditAccountModal from "./EditAccountModal";
import axios from "axios";
import "../styles/Home.css";

function Home() {
  const [activeTab, setActiveTab] = useState("personel");
  const [accounts, setAccounts] = useState([]);
  const [editingAccount, setEditingAccount] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get("http://localhost:5059/api/accounts");
      setAccounts(response.data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };

  const handleAddClick = () => {
    setEditingAccount(null);
    setShowAddForm(true);
  };

  const handleEditClick = (account) => {
    setEditingAccount(account);
    setEditModalOpen(true);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5059/api/accounts/${id}`);
      fetchAccounts();
    } catch (error) {
      console.error("Silme hatası:", error);
    }
  };

  const handleAccountSaved = () => {
    setShowAddForm(false);
    fetchAccounts();
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingAccount((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5059/api/accounts/${editingAccount.id}`, editingAccount);
      setEditModalOpen(false);
      fetchAccounts();
    } catch (error) {
      console.error("Güncelleme hatası:", error);
    }
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="sidebar-item">⚙️ Ayarlar</div>
        <div className="sidebar-item">📁 Hesap Yönetimi</div>
      </div>

      <div className="main-content">
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

        {activeTab === "personel" && (
          <div>
            <h2>Personel Hesapları</h2>
            <button onClick={handleAddClick}>➕ Yeni Hesap Ekle</button>

            {showAddForm && (
              <AddAccountForm
                onAccountAdded={handleAccountSaved}
                editingAccount={editingAccount}
              />
            )}

            <table className="account-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Kullanıcı Adı</th>
                  <th>Şifre</th>
                  <th>Email</th>
                  <th>IP Adresi</th>
                  <th>Not</th>
                  <th>Paylaşım</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account) => (
                  <tr key={account.id}>
                    <td>{account.platform || "—"}</td>
                    <td>{account.username || "—"}</td>
                    <td>{account.password || "—"}</td>
                    <td>{account.email || "—"}</td>
                    <td>{account.ipAddress || "—"}</td>
                    <td>{account.notes || "—"}</td>
                    <td>{account.isShared ? "Evet" : "Hayır"}</td>
                    <td>
                      <button onClick={() => handleEditClick(account)}>✏️</button>
                      <button onClick={() => handleDeleteClick(account.id)}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "paylasilanlar" && (
          <div>
            <h2>Paylaşılan Hesaplar</h2>
            <table className="account-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Kullanıcı Adı</th>
                  <th>Şifre</th>
                  <th>Email</th>
                  <th>IP Adresi</th>
                  <th>Not</th>
                  <th>Paylaşan</th>
                </tr>
              </thead>
              <tbody>
                {accounts
                  .filter((a) => a.isShared)
                  .map((a) => (
                    <tr key={a.id}>
                      <td>{a.platform || "—"}</td>
                      <td>{a.username || "—"}</td>
                      <td>{a.password || "—"}</td>
                      <td>{a.email || "—"}</td>
                      <td>{a.ipAddress || "—"}</td>
                      <td>{a.notes || "—"}</td>
                      <td>{a.owner || "Bilinmiyor"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <EditAccountModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        account={editingAccount}
        onSave={handleUpdateSubmit}
        onChange={handleEditChange}
      />
    </div>
  );
}

export default Home;