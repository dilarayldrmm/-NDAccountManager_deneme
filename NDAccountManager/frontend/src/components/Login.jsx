import { useMsal } from "@azure/msal-react";
import { msalConfig, loginRequest } from "../authConfig";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Login = () => {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  const handleLogin = () => {
    const activeAccount = instance.getActiveAccount();
    const inProgress = sessionStorage.getItem("msal.interaction.status");

    // Hâlihazırda giriş yapılmadıysa ve bir işlem sürmüyorsa giriş başlat
    if (!activeAccount && inProgress !== "interaction_in_progress") {
      instance.loginRedirect(loginRequest);
    }
  };

  useEffect(() => {
    // Eğer giriş yapılmışsa otomatik olarak ana sayfaya yönlendir
    if (accounts.length > 0) {
      navigate("/home");
    }
  }, [accounts, navigate]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>NDAccountManager</h2>
      <button style={styles.button} onClick={handleLogin}>
        Microsoft ile Giriş Yap
      </button>
    </div>
  );
};

export default Login;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff7f1",
  },
  title: {
    fontSize: "28px",
    color: "#ff6600",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#ff6600",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};