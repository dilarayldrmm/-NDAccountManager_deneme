export const msalConfig = {
  auth: {
    clientId: "3305e490-1edf-4279-8c91-f4f497647338",
    authority: "https://login.microsoftonline.com/552a6af7-31b4-4de6-a7d7-cf20278bde03",
    redirectUri: "http://localhost:3000", 
  },
};

export const loginRequest = {
  scopes: ["user.read"],
};