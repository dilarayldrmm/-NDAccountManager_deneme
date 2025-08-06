const API_BASE_URL = "http://localhost:5059/api/accounts";

export async function getAccounts() {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) throw new Error("Veriler alınamadı");
  return await response.json();
}

export async function addAccount(account) {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(account),
  });
  if (!response.ok) throw new Error("Hesap eklenemedi");
  return await response.json();
}