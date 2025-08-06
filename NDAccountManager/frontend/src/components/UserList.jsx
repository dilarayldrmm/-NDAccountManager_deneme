import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

function UserList() {
  const { instance } = useMsal();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    instance.acquireTokenSilent(loginRequest)
      .then((response) => {
        const token = response.accessToken;

        fetch("http://localhost:5059/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setUsers(data))
          .catch((err) => console.error("API Hatası:", err));
      })
      .catch((err) => {
        console.error("Token alınamadı:", err);
      });
  }, [instance]);

  return (
    <div>
      <h2>Kullanıcılar</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.role})</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;