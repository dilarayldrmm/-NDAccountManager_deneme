import React, { useState } from "react";

function Settings() {
  const [categories, setCategories] = useState(["Development", "Support", "Sale", "Manager"]);
  const [newCategory, setNewCategory] = useState("");

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const deleteCategory = (cat) => {
    setCategories(categories.filter(c => c !== cat));
  };

  return (
    <div>
      <h3>Kategori Yönetimi</h3>
      <input
        type="text"
        placeholder="Yeni kategori"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={addCategory}>Ekle</button>

      <ul>
        {categories.map(cat => (
          <li key={cat}>
            {cat} <button onClick={() => deleteCategory(cat)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Settings;