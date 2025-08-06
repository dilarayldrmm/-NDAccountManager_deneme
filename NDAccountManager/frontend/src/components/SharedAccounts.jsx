// SharedAccounts.jsx örnek (accounts prop'u kullanılıyor)

function SharedAccounts({ accounts }) {
  const sharedAccounts = accounts.filter(acc => acc.isShared && acc.sharedWith?.length > 0);

  if (!sharedAccounts.length) return <p>Paylaşılan hesap bulunamadı.</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Platform</th>
          <th>Kullanıcı Adı</th>
          <th>Notlar</th>
          <th>Kategori</th>
          <th>Paylaşılan Gruplar</th>
        </tr>
      </thead>
      <tbody>
        {sharedAccounts.map(acc => (
          <tr key={acc.id}>
            <td>{acc.platform}</td>
            <td>{acc.username}</td>
            <td>{acc.notes}</td>
            <td>{acc.category || "-"}</td>
            <td>{acc.sharedWith.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SharedAccounts;