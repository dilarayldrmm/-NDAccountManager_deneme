import React, { useEffect, useState } from "react";

const AccountList = ({ token, onEdit }) => {
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    const res = await fetch("http://localhost:5222/api/accounts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setAccounts(data);
  };

  const deleteAccount = async (id) => {
    await fetch(`http://localhost:5222/api/accounts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchAccounts();
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div>
      <h3>Hesaplar</h3>
      <ul>
        {accounts.map((acc) => (
          <li key={acc.id}>
            <strong>{acc.platform}</strong> - {acc.email}
            <button onClick={() => onEdit(acc)}>Düzenle</button>
            <button onClick={() => deleteAccount(acc.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;