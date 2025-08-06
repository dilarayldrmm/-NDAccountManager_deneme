
// Azure AD'den gelen kullanıcının rollerini çözümleyen yardımcı fonksiyon
export const getUserRoleFromAccount = (account) => {
  if (!account || !account.idTokenClaims) return null;

  const groups = account.idTokenClaims.groups || [];

  if (groups.includes("Development_Group_ID")) return "Development";
  if (groups.includes("Support_Group_ID")) return "Support";
  if (groups.includes("Sale_Group_ID")) return "Sale";
  if (groups.includes("Manager_Group_ID")) return "Manager";

  return "User"; // varsayılan rol
};