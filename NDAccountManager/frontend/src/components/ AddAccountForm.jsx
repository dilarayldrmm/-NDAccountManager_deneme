import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AddAccountForm.css'; // CSS dosyasını unutma

const groupOptions = ['Development', 'Support', 'Sale', 'Manager'];

const AddAccountForm = ({ editingAccount, onAccountAdded }) => {
  const [formData, setFormData] = useState({
    platform: '',
    username: '',
    password: '',
    email: '',
    ipAddress: '',
    notes: '',
    sharedWithGroups: []
  });

  const [share, setShare] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (editingAccount) {
      setFormData(editingAccount);
      setShare(editingAccount.sharedWithGroups?.length > 0);
    }
  }, [editingAccount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGroupSelect = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prev) => ({ ...prev, sharedWithGroups: selected }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const payload = { ...formData };
      if (!share) {
        payload.sharedWithGroups = [];
      }

      if (editingAccount) {
        await axios.put(`http://localhost:5059/api/accounts/${editingAccount.id}`, payload);
        setSuccessMessage("Hesap başarıyla güncellendi.");
      } else {
        await axios.post('http://localhost:5059/api/accounts', payload);
        setSuccessMessage("Hesap başarıyla eklendi.");
      }

      onAccountAdded();
      setFormData({
        platform: '',
        username: '',
        password: '',
        email: '',
        ipAddress: '',
        notes: '',
        sharedWithGroups: []
      });
      setShare(false);
    } catch (error) {
      console.error('Kayıt işlemi hatası:', error);
      setError("Hesap kaydedilemedi. Lütfen tekrar deneyin.");
    }
  };

  return (
    <form className="account-form" onSubmit={handleSubmit}>
      <input name="platform" value={formData.platform} onChange={handleChange} placeholder="Platform" required />
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Kullanıcı Adı" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Şifre" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-posta" />
      <input name="ipAddress" value={formData.ipAddress} onChange={handleChange} placeholder="IP Adresi" />
      <input name="notes" value={formData.notes} onChange={handleChange} placeholder="Notlar" />

      <label className="checkbox-label">
        <input type="checkbox" checked={share} onChange={() => setShare(!share)} />
        Bu hesabı paylaşmak istiyorum
      </label>

      {share && (
        <select multiple className="multi-select" value={formData.sharedWithGroups} onChange={handleGroupSelect}>
          {groupOptions.map((group) => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
      )}

      <button type="submit">{editingAccount ? "Güncelle" : "Kaydet"}</button>

      {error && <div className="error-msg">{error}</div>}
      {successMessage && <div className="success-msg">{successMessage}</div>}
    </form>
  );
};

export default AddAccountForm;