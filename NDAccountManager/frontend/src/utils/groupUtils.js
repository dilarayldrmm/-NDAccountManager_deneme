const groupIDs = {
  development: process.env.REACT_APP_GROUP_DEVELOPMENT_ID,
  support: process.env.REACT_APP_GROUP_SUPPORT_ID,
  sales: process.env.REACT_APP_GROUP_SALES_ID,
  manager: process.env.REACT_APP_GROUP_MANAGER_ID,
};

export function getUserRole(groupList) {
  if (groupList.includes(groupIDs.manager)) return "Manager";
  if (groupList.includes(groupIDs.development)) return "Development";
  if (groupList.includes(groupIDs.support)) return "Support";
  if (groupList.includes(groupIDs.sales)) return "Sales";
  return "Unknown";
}