import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEditorStore } from "../store/editorStore";
export default function StatusBar() {
    const { saved } = useEditorStore();
    return (_jsxs("div", { style: {
            height: "24px",
            background: "#007acc",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 10px",
            alignItems: "center"
        }, children: [_jsx("span", { children: "Open Editor" }), _jsx("span", { children: saved
                    ? "Saved"
                    : "Saving..." }), _jsx("span", { children: "Developed by Dev Surjo" })] }));
}
