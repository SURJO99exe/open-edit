import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useEditorStore } from "../store/editorStore";
export default function Explorer() {
    const [files, setFiles] = useState([]);
    const { setContent, setFile } = useEditorStore();
    async function openFolder() {
        const data = await window.api.openFolder();
        setFiles(data);
    }
    async function openFile(file) {
        if (file.isDirectory)
            return;
        const text = await window.api.readFile(file.path);
        setFile(file.path);
        setContent(text);
    }
    return (_jsxs("div", { children: [_jsx("button", { onClick: openFolder, children: "Open Folder" }), files.map(file => (_jsx("div", { onClick: () => openFile(file), children: file.name }, file.path)))] }));
}
