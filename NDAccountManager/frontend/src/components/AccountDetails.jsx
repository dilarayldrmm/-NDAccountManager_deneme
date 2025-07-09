import React from 'react';

export default function AccountDetails({ userRole }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Hesap Detayları</h2>
      <p>Kullanıcı rolü: {userRole}</p>
    </div>
  );
}

