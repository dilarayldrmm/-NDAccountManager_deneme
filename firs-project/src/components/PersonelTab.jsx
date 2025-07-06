import React, { useState } from "react";
import './PersonelTab.css';
export default function PersonelTab() {
  const [accounts, setAccounts] = useState([
    {id:1, name:"Hesap 1", username:"user1", password:"****"},
  ]);
  const [newAccount, setNewAccount] = useState({name:"", username:"", password:""});

  function handleAdd() {
    if(newAccount.name && newAccount.username && newAccount.password) {
      setAccounts([...accounts, {...newAccount, id: Date.now()}]);
      setNewAccount({name:"", username:"", password:""});
    }
  }

  return (
    <div style={{padding:20}}>
      <h3>Personel Hesapları</h3>
      <ul>
        {accounts.map(acc => (
          <li key={acc.id}>
            <b>{acc.name}</b> - {acc.username} - {acc.password}
          </li>
        ))}
      </ul>
      <h4>Yeni Hesap Ekle</h4>
      <input placeholder="Hesap Adı" value={newAccount.name} onChange={e=>setNewAccount({...newAccount, name:e.target.value})} />
      <input placeholder="Kullanıcı Adı" value={newAccount.username} onChange={e=>setNewAccount({...newAccount, username:e.target.value})} />
      <input placeholder="Şifre" type="password" value={newAccount.password} onChange={e=>setNewAccount({...newAccount, password:e.target.value})} />
      <button onClick={handleAdd} style={{marginTop:10, backgroundColor:"#FF6600", color:"white", padding:"5px 10px", border:"none", borderRadius:4}}>Ekle</button>
    </div>
  );
}