import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Explorer from "./components/Explorer";
import StatusBar from "./components/StatusBar";
import Editor from "./components/Editor";
import AIChat from "./components/AIChat";
import TerminalView from "./components/Terminal";
export default function App() {
    return (_jsxs("div", { className: "layout", children: [_jsx("div", { className: "left", children: _jsx(Explorer, {}) }), _jsx("div", { className: "center", children: _jsx(Editor, {}) }), _jsx("div", { className: "right", children: _jsx(AIChat, {}) }), _jsx("div", { className: "bottom", children: _jsx(TerminalView, {}) }), _jsx(StatusBar, {})] }));
}
