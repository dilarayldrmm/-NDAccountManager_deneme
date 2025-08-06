
import React from 'react';
import "../styles/MainLayout.css";
function AccountCard({ account, onEdit, onDelete }) {
  return (
    <div className="account-card">
      <h3>{account.platform}</h3>
      <p><strong>Kullanıcı Adı:</strong> {account.username}</p>
      <p><strong>Notlar:</strong> {account.notes}</p>

      <button onClick={() => onEdit(account)}>Güncelle</button>
      <button onClick={() => onDelete(account.id)}>Sil</button>
    </div>
  );
}

export default AccountCard;