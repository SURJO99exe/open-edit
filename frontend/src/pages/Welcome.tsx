type WelcomeProps = {
  onStart?: () => void;
};

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0b1220",
        color: "#ffffff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Open Editor
      </h1>

      <p style={{ fontSize: "1rem", opacity: 0.7, marginBottom: "5px" }}>
        Made by Dev Surjo
      </p>

      <p style={{ fontSize: "1rem", opacity: 0.6, marginBottom: "30px" }}>
        A lightweight modern code editor for building amazing projects 🚀
      </p>

      <button
        onClick={onStart}
        style={{
          padding: "12px 26px",
          fontSize: "1rem",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          background: "#4f46e5",
          color: "#fff",
          transition: "0.3s",
        }}
        onMouseOver={(e) =>
          ((e.target as HTMLButtonElement).style.background = "#4338ca")
        }
        onMouseOut={(e) =>
          ((e.target as HTMLButtonElement).style.background = "#4f46e5")
        }
      >
        Start Coding
      </button>
    </div>
  );
}