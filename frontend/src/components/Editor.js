import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import { useEditorStore } from "../store/editorStore";
export default function Editor() {
    const { content, setContent, currentFile } = useEditorStore();
    const saveTimer = useRef(null);
    useEffect(() => {
        if (!currentFile)
            return;
        // clear previous timer
        if (saveTimer.current) {
            clearTimeout(saveTimer.current);
        }
        // set new autosave timer
        saveTimer.current = setTimeout(async () => {
            try {
                await window.api.saveFile(currentFile, content);
                console.log("Auto Saved");
            }
            catch (err) {
                console.error(err);
            }
        }, 1500);
        // cleanup on unmount/change
        return () => {
            if (saveTimer.current) {
                clearTimeout(saveTimer.current);
            }
        };
    }, [content, currentFile]);
    return (_jsx(MonacoEditor, { height: "100%", theme: "vs-dark", language: "typescript", value: content, onChange: (value) => setContent(value || "") }));
}
