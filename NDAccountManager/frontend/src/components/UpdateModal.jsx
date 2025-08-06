import React, { useState, useEffect } from "react";
import "../styles/Modal.css";

const UpdateModal = ({ isOpen, onClose, account, onSave }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (account) setFormData(account);
  }, [account]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Hesap Güncelle</h2>
        <input
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          placeholder="Başlık"
        />
        <input
          name="username"
          value={formData.username || ""}
          onChange={handleChange}
          placeholder="Kullanıcı Adı"
        />
        <input
          name="password"
          value={formData.password || ""}
          onChange={handleChange}
          placeholder="Şifre"
        />
        <input
          name="notes"
          value={formData.notes || ""}
          onChange={handleChange}
          placeholder="Notlar"
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>Kaydet</button>
          <button onClick={onClose} className="cancel-btn">İptal</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;