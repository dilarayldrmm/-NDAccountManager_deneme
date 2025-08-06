import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AccountTable.css";

const AccountTable = ({ onEdit }) => {
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get("http://localhost:5059/api/accounts");
      setAccounts(response.data);
    } catch (error) {
      console.error("Hesaplar alınamadı:", error);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5059/api/accounts/${id}`);
      fetchAccounts(); // Listeyi güncelle
    } catch (error) {
      console.error("Silme hatası:", error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Platform</th>
          <th>Kullanıcı Adı</th>
          <th>Şifre</th>
          <th>Email</th>
          <th>IP Adresi</th>
          <th>Notlar</th>
          <th>Paylaşım</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(account => (
          <tr key={account.id}>
            <td>{account.platform}</td>
            <td>{account.username}</td>
            <td>{account.password}</td>
            <td>{account.email}</td>
            <td>{account.ipAddress}</td>
            <td>{account.notes}</td>
            <td>{account.isShared ? "Evet" : "Hayır"}</td>
            <td>
              <button onClick={() => onEdit(account)}>Düzenle</button>
              <button onClick={() => handleDelete(account.id)}>Sil</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountTable;