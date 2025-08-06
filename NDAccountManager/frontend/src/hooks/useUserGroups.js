import { useMsal } from "@azure/msal-react";
import { msalConfig } from "../authConfig"; // ✅ ../components değil!


export function useUserGroups() {
  const { instance, accounts } = useMsal();

  async function getUserGroups() {
    if (!accounts || accounts.length === 0) {
      return [];
    }

    try {
      const response = await instance.acquireTokenSilent({
        scopes: ["User.Read"],
        account: accounts[0],
      });
      return response.idTokenClaims?.groups || [];
    } catch (error) {
      console.error("Token alma hatası:", error);
      return [];
    }
  }

  return { getUserGroups };
}