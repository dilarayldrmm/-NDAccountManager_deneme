import React from "react";
import './PaylasilanlarTab.css';
export default function PaylasilanlarTab() {
  const sharedAccounts = [
    {id:1, name:"Paylaşılan Hesap 1", username:"shareduser", password:"****"},
  ];

  return (
    <div style={{padding:20}}>
      <h3>Paylaşılan Hesaplar</h3>
      <ul>
        {sharedAccounts.map(acc => (
          <li key={acc.id}>
            <b>{acc.name}</b> - {acc.username} - {acc.password}
          </li>
        ))}
      </ul>
    </div>
  );
}