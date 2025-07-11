export const msalConfig = {
  auth: {
    clientId: "3305e490-1edf-4279-8c91-f4f497647338",          // Azure portal'dan al
    authority: "https://login.microsoftonline.com/552a6af7-31b4-4de6-a7d7-cf20278bde03", // Azure tenant ID
    redirectUri: "http://localhost:3000",     // React çalıştığında buraya döner
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["User.Read"], // veya backend API scope'un varsa onu ekle
};