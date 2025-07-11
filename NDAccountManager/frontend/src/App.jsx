import React from "react";
import Login from "./components/Login";
import UserList from "./components/UserList";
import { useIsAuthenticated } from "@azure/msal-react";

function App() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="App">
      {isAuthenticated ? <UserList /> : <Login />}
    </div>
  );
}

export default App;