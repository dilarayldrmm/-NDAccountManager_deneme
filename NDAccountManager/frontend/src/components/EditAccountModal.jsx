import React from "react";
import "../styles/Modal.css";

function EditAccountModal({ isOpen, onClose, account, onSave, onChange }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Hesap Bilgilerini Güncelle</h2>
        <form onSubmit={onSave}>
          <label>Kullanıcı Adı</label>
          <input type="text" name="username" value={account.username} onChange={onChange} required />

          <label>Şifre</label>
          <input type="text" name="password" value={account.password} onChange={onChange} />

          <label>Email</label>
          <input type="email" name="email" value={account.email} onChange={onChange} />

          <label>IP Adresi</label>
          <input type="text" name="ipAddress" value={account.ipAddress} onChange={onChange} />

          <label>Notlar</label>
          <textarea name="notes" value={account.notes} onChange={onChange}></textarea>

          <div className="modal-buttons">
            <button type="submit">Kaydet</button>
            <button type="button" className="cancel-btn" onClick={onClose}>İptal</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditAccountModal;