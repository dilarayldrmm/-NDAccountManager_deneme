import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AddAccountForm.css";

const AddAccountForm = ({ editingAccount, onAccountAdded }) => {
  const [formData, setFormData] = useState({
    platform: '',
    username: '',
    password: '',
    email: '',
    ipAddress: '',
    notes: '',
    sharedWithUserIds: [] // kullanıcı ID listesi
  });

  const [share, setShare] = useState(false);
  const [users, setUsers] = useState([]); // Kullanıcı listesi
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    // Eğer düzenleme modundaysa mevcut verileri formData’ya set et
    if (editingAccount) {
      setFormData({
        ...editingAccount,
        sharedWithUserIds: editingAccount.sharedWithUserIds || [],
      });
      setShare(editingAccount.sharedWithUserIds?.length > 0);
    }

    // Kullanıcıları çek
    axios.get("http://localhost:5059/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Kullanıcılar alınamadı:", err));
  }, [editingAccount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUserSelect = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedUserIds = selectedOptions.map(option => option.value);
    setFormData(prev => ({ ...prev, sharedWithUserIds: selectedUserIds }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const payload = {
      ...formData,
      sharedWithUserIds: share ? formData.sharedWithUserIds : []
    };

    try {
      if (editingAccount) {
        await axios.put(`http://localhost:5059/api/accounts/${editingAccount.id}`, payload);
        setSuccessMessage("Hesap başarıyla güncellendi.");
      } else {
        await axios.post("http://localhost:5059/api/accounts", payload);
        setSuccessMessage("Hesap başarıyla eklendi.");
      }

      setFormData({
        platform: '',
        username: '',
        password: '',
        email: '',
        ipAddress: '',
        notes: '',
        sharedWithUserIds: []
      });
      setShare(false);
      onAccountAdded();
    } catch (err) {
      setError("Hesap kaydedilirken hata oluştu.");
      console.error(err);
    }
  };

  return (
    <div className="add-account-form">
      <h2>{editingAccount ? "Hesabı Güncelle" : "Yeni Hesap Ekle"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="platform" placeholder="Platform" value={formData.platform} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Kullanıcı Adı" value={formData.username} onChange={handleChange} required />
        <input type="text" name="password" placeholder="Şifre" value={formData.password} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="ipAddress" placeholder="IP Adresi" value={formData.ipAddress} onChange={handleChange} />
        <textarea name="notes" placeholder="Notlar" value={formData.notes} onChange={handleChange}></textarea>

        <div className="share-checkbox">
          <label>
            <input
              type="checkbox"
              checked={share}
              onChange={(e) => setShare(e.target.checked)}
            />
            Bu hesabı başka kullanıcılarla paylaş
          </label>
        </div>

        {share && (
          <div className="user-select">
            <label>Kullanıcıları Seçin:</label>
            <select multiple value={formData.sharedWithUserIds} onChange={handleUserSelect}>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name || user.email}
                </option>
              ))}
            </select>
          </div>
        )}

        <button type="submit">{editingAccount ? "Güncelle" : "Ekle"}</button>
        {successMessage && <p className="success">{successMessage}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default AddAccountForm;