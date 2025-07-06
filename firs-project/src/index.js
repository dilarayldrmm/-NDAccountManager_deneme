// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

const msalConfig = {
  auth: {
    clientId: "3305e490-1edf-4279-8c91-f4f497647338",
    authority: "https://login.microsoftonline.com/552a6af7-31b4-4de6-a7d7-cf20278bde03",
    redirectUri: "https://localhost:5000"
  }
};

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>
);