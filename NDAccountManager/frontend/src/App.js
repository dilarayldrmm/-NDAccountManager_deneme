import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { getUserRoleFromAccount } from "./utils/authUtils";

// Bu içerik App'ten silinip AppContent içine taşınacak:
// instance.setActiveAccount(accounts[0]) ayarı burada yapılmalı

const AppContent = () => {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      instance.setActiveAccount(accounts[0]); // ✔️ buraya taşıdık
      const role = getUserRoleFromAccount(accounts[0]);

      if (role === "Manager") {
        navigate("/home");
      } else if (role === "Support") {
        navigate("/support-dashboard");
      } else {
        navigate("/home");
      }
    }
  }, [accounts, navigate, instance]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;