import React, { useState } from "react";
import './HesapYoneticisi.css';

export default function HesapYoneticisi({ userRole }) {
  // userRole: "Manager" veya "User"
  const [accounts, setAccounts] = useState([
    {id:1, name:"Hesap 1", username:"user1", password:"****", shared:false, limitli:false, tarih:null},
  ]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  function startEdit(acc) {
    setEditId(acc.id);
    setEditData({...acc});
  }

  function saveEdit() {
    setAccounts(accounts.map(a => a.id === editId ? editData : a));
    setEditId(null);
  }

  function deleteAcc(id) {
    setAccounts(accounts.filter(a => a.id !== id));
  }

  function toggleShare(id) {
    setAccounts(accounts.map(a => a.id === id ? {...a, shared: !a.shared} : a));
  }

  return (
    <div style={{padding:20}}>
      <h3>Hesap Bilgileri Yönetimi</h3>
      <table border={1} cellPadding={5} cellSpacing={0} style={{width:"100%", borderCollapse:"collapse"}}>
        <thead>
          <tr>
            <th>Hesap Adı</th>
            <th>Kullanıcı Adı</th>
            <th>Şifre</th>
            {userRole === "Manager" && <th>Paylaş</th>}
            {userRole === "Manager" && <th>Limit</th>}
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(acc => (
            <tr key={acc.id}>
              <td>{editId === acc.id ? <input value={editData.name} onChange={e=>setEditData({...editData, name:e.target.value})} /> : acc.name}</td>
              <td>{editId === acc.id ? <input value={editData.username} onChange={e=>setEditData({...editData, username:e.target.value})} /> : acc.username}</td>
              <td>{editId === acc.id ? <input type="password" value={editData.password} onChange={e=>setEditData({...editData, password:e.target.value})} /> : acc.password}</td>
              
              {userRole === "Manager" && (
                <td>
                  {editId === acc.id ? (
                    <input 
                      type="checkbox" 
                      checked={editData.shared} 
                      onChange={e => setEditData({...editData, shared: e.target.checked})} 
                    />
                  ) : acc.shared ? "Evet" : "Hayır"}
                </td>
              )}

              {userRole === "Manager" && (
                <td>
                  {editId === acc.id ? (
                    <>
                      <label>
                        <input 
                          type="checkbox" 
                          checked={!editData.limitli} 
                          onChange={e => setEditData({...editData, limitli: !e.target.checked, tarih: e.target.checked ? null : editData.tarih})} 
                        /> Limitsiz
                      </label>
                      {editData.limitli && (
                        <input 
                          type="date" 
                          value={editData.tarih || ""} 
                          onChange={e => setEditData({...editData, tarih: e.target.value})} 
                        />
                      )}
                    </>
                  ) : acc.shared ? (acc.limitli ? `Limitli: ${acc.tarih}` : "Limitsiz") : "-"}
                </td>
              )}

              <td>
                {editId === acc.id ? (
                  <>
                    <button onClick={saveEdit} style={{marginRight:5}}>Kaydet</button>
                    <button onClick={() => setEditId(null)}>İptal</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => startEdit(acc)} style={{marginRight:5}}>Düzenle</button>
                    <button onClick={() => deleteAcc(acc.id)}>Sil</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}