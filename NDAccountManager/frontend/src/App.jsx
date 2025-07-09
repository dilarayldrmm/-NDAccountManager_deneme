import React from "react";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
<div style={styles.container}>
  <h2 style={styles.title}>NDAccountManager</h2>
  <button style={styles.button} onClick={handleLogin}>
    Microsoft ile Giriş Yap
  </button>
</div>