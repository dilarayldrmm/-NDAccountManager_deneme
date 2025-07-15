import React, { useState, useEffect } from "react";

const AccountForm = ({ onSave, selectedAccount, token }) => {
  const [form, setForm] = useState({
    platform: "",
    email: "",
    password: "",
    ipAddress: "",
    notes: "",
  });

  useEffect(() => {
    if (selectedAccount) {
      setForm(selectedAccount);
    }
  }, [selectedAccount]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = selectedAccount ? "PUT" : "POST";
    const url = selectedAccount
      ? `http://localhost:5222/api/accounts/${selectedAccount.id}`
      : "http://localhost:5222/api/accounts";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const data = await res.json();
      onSave(data);
      setForm({ platform: "", email: "", password: "", ipAddress: "", notes: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="platform" value={form.platform} onChange={handleChange} placeholder="Platform" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="E-posta" />
      <input name="password" value={form.password} onChange={handleChange} placeholder="Şifre" />
      <input name="ipAddress" value={form.ipAddress} onChange={handleChange} placeholder="IP Adresi" />
      <input name="notes" value={form.notes} onChange={handleChange} placeholder="Notlar" />
      <button type="submit">{selectedAccount ? "Güncelle" : "Ekle"}</button>
    </form>
  );
};

export default AccountForm;