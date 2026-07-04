export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
          }}
        >
          PartForge AI
        </h1>

        <h2
          style={{
            color: "#9CA3AF",
            marginBottom: "40px",
            fontWeight: "normal",
          }}
        >
          Design functional 3D-printable parts using AI
        </h2>

        <input
          type="text"
          placeholder="Example: Design a shelf bracket for 20kg"
          style={{
            width: "100%",
            padding: "18px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "1px solid #444",
            marginBottom: "20px",
          }}
        />

        <br />

        <button
          style={{
            background: "#2563EB",
            color: "white",
            padding: "16px 40px",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Generate Design
        </button>
      </div>
    </main>
  );
}