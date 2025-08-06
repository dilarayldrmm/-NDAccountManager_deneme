import React from "react";
import "../styles/MainLayout.css";

function AccountList({ accounts, onDelete, onEdit }) {
  if (!accounts || accounts.length === 0) return <p>Hesap bulunamadı.</p>;

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <thead style={{ backgroundColor: "#ff8800", color: "#fff" }}>
          <tr>
            <th style={thStyle}>Platform</th>
            <th style={thStyle}>Kullanıcı Adı</th>
            <th style={thStyle}>Şifre</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>IP Adresi</th>
            <th style={thStyle}>Notlar</th>
            <th style={thStyle}>Kategori</th>
            <th style={thStyle}>Etiketler</th>
            <th style={thStyle}>Paylaşım</th>
            <th style={thStyle}>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc) => (
            <tr key={acc.id} style={{ borderBottom: "1px solid #ddd", backgroundColor: "#fff" }}>
              <td style={tdStyle}>{acc.platform}</td>
              <td style={tdStyle}>{acc.username}</td>
              <td style={tdStyle}>{acc.password}</td>
              <td style={tdStyle}>{acc.email}</td>
              <td style={tdStyle}>{acc.ipAddress}</td>
              <td style={tdStyle}>{acc.notes}</td>
              <td style={tdStyle}>{acc.categoryId || "-"}</td>
              <td style={tdStyle}>
                {acc.tags && acc.tags.length > 0 ? acc.tags.join(", ") : "-"}
              </td>
              <td style={tdStyle}>{acc.isShared ? "Evet" : "Hayır"}</td>
              <td style={tdStyle}>
                <button onClick={() => onEdit(acc)} style={editBtn}>Düzenle</button>
                <button onClick={() => onDelete(acc.id)} style={deleteBtn}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  textAlign: "left",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "10px",
  color: "#333",
};

const editBtn = {
  backgroundColor: "#ffa500",
  border: "none",
  color: "white",
  padding: "6px 12px",
  marginRight: "6px",
  borderRadius: "6px",
  cursor: "pointer",
};

const deleteBtn = {
  backgroundColor: "#cc3300",
  border: "none",
  color: "white",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

export default AccountList;