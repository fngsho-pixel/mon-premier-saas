
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#0f172a",
      color: "white",
      fontFamily: "Arial",
      textAlign: "center",
      padding: "30px"
    }}>
      <h1>Bienvenue sur mon SaaS 🚀</h1>
      <p>Mon application est en construction.</p>
      <button style={{
        padding: "14px 25px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "8px",
        marginTop: "20px"
      }}>
        Commencer
      </button>
    </main>
  );
}
