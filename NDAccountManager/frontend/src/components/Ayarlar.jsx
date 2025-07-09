import React, { useState } from "react";
import './Ayarlar.css';
export default function Ayarlar({ userRole }) {
  const [categories, setCategories] = useState(["Kategori 1", "Kategori 2"]);
  const [newCat, setNewCat] = useState("");

  if(userRole !== "Manager") {
    return <p style={{padding:20}}>Bu sayfaya erişim yetkiniz yok.</p>;
  }

  function addCategory() {
    if(newCat.trim() !== "") {
      setCategories([...categories, newCat.trim()]);
      setNewCat("");
    }
  }

  function deleteCategory(index) {
    setCategories(categories.filter((_, i) => i !== index));
  }

  return (
    <div style={{padding:20}}>
      <h3>Kategori Yönetimi</h3>
      <ul>
        {categories.map((cat, i) => (
          <li key={i}>
            {cat} <button onClick={() => deleteCategory(i)}>Sil</button>
          </li>
        ))}
      </ul>
      <input placeholder="Yeni kategori" value={newCat} onChange={e => setNewCat(e.target.value)} />
      <button onClick={addCategory} style={{marginLeft:10}}>Ekle</button>
    </div>
  );
}