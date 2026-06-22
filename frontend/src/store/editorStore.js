import { create } from "zustand";
export const useEditorStore = create((set) => ({
    currentFile: "",
    content: "",
    saved: true,
    setSaved: saved => set({ saved }),
    setFile: file => set({
        currentFile: file
    }),
    setContent: content => set({
        content,
        saved: false
    })
}));
