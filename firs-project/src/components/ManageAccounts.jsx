import React, { useState } from "react";
import "./ManageAccounts.css";

function ManageAccounts() {
  const [accounts, setAccounts] = useState([]);
  const [form, setForm] = useState({ site: "", username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.site && form.username && form.password) {
      setAccounts([...accounts, form]);
      setForm({ site: "", username: "", password: "" });
    }
  };

  return (
    <div className="manage-container">
      <h2>Hesap Bilgisi Ekle</h2>
      <form onSubmit={handleSubmit} className="account-form">
        <input
          type="text"
          name="site"
          placeholder="Site Adı"
          value={form.site}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Ekle</button>
      </form>

      <div className="account-list">
        <h3>Kayıtlı Hesaplar</h3>
        <ul>
          {accounts.map((acc, index) => (
            <li key={index}>
              <strong>{acc.site}</strong> - {acc.username} / {acc.password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ManageAccounts;
