"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("api", {
    openFolder: () => electron_1.ipcRenderer.invoke("open-folder"),
    readFile: (path) => electron_1.ipcRenderer.invoke("read-file", path),
    saveFile: (path, content) => electron_1.ipcRenderer.invoke("save-file", path, content),
    getModels: () => electron_1.ipcRenderer.invoke("ollama-models")
});
