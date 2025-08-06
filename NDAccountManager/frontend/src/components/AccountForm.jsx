import React, { useState, useEffect } from "react";
import axios from "axios";

function AccountForm({ account, onSave }) {
  const [platform, setPlatform] = useState(account?.platform || "");
  const [username, setUsername] = useState(account?.username || "");
  const [email, setEmail] = useState(account?.email || "");
  const [ipAddress, setIpAddress] = useState(account?.ipAddress || "");
  const [notes, setNotes] = useState(account?.notes || "");
  const [sharedWith, setSharedWith] = useState(account?.sharedWithUserIds || []);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then(res => {
      setUsers(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAccount = {
      platform,
      username,
      email,
      ipAddress,
      notes,
      sharedWithUserIds: sharedWith
    };
    onSave(newAccount);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={platform} onChange={e => setPlatform(e.target.value)} placeholder="Platform" />
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Kullanıcı Adı" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={ipAddress} onChange={e => setIpAddress(e.target.value)} placeholder="IP Adresi" />
      <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Not" />

      <label>Paylaşım:</label>
      <select
        multiple
        value={sharedWith}
        onChange={(e) =>
          setSharedWith(Array.from(e.target.selectedOptions, (option) => option.value))
        }
      >
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.displayName}</option>
        ))}
      </select>

      <button type="submit">Kaydet</button>
    </form>
  );
}

export default AccountForm;