import React from "react";
import Login from "./components/Login";
import AccountManager from "./components/AccountManager";
import { useIsAuthenticated } from "@azure/msal-react";

function App() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div>
      {isAuthenticated ? <AccountManager /> : <Login />}
    </div>
  );
}

export default App;