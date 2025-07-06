import { useMsal } from "@azure/msal-react";
import { msalConfig, loginRequest } from "../authConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Login.css";



const Login = () => {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  useEffect(() => {
    if (accounts.length > 0) {
      navigate("/home");
    }
  }, [accounts]);

  return (
    <div>
      <h2>NDAccountManager</h2>
      <button onClick={handleLogin}>Microsoft ile Giriş Yap</button>
    </div>
  );
};

export default Login;