import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Welcome({ onStart }) {
    return (_jsxs("div", { style: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#0b1220",
            color: "#ffffff",
            textAlign: "center",
            padding: "20px",
        }, children: [_jsx("h1", { style: { fontSize: "3rem", marginBottom: "10px" }, children: "Open Editor" }), _jsx("p", { style: { fontSize: "1rem", opacity: 0.7, marginBottom: "5px" }, children: "Made by Dev Surjo" }), _jsx("p", { style: { fontSize: "1rem", opacity: 0.6, marginBottom: "30px" }, children: "A lightweight modern code editor for building amazing projects \uD83D\uDE80" }), _jsx("button", { onClick: onStart, style: {
                    padding: "12px 26px",
                    fontSize: "1rem",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    background: "#4f46e5",
                    color: "#fff",
                    transition: "0.3s",
                }, onMouseOver: (e) => (e.target.style.background = "#4338ca"), onMouseOut: (e) => (e.target.style.background = "#4f46e5"), children: "Start Coding" })] }));
}
