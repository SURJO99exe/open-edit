"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
let win = null;
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            preload: path_1.default.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true
        }
    });
    // Load from built files in production, dev server in development
    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL);
    }
    else {
        // In production, load from the built frontend files
        // With standard electron-builder packaging, files are in app.asar
        const isPackaged = electron_1.app.isPackaged;
        let htmlPath;
        if (isPackaged) {
            // In packaged app, use resources path
            htmlPath = path_1.default.join(process.resourcesPath, "app.asar", "frontend", "dist", "index.html");
        }
        else {
            // In development, use relative path
            htmlPath = path_1.default.join(__dirname, "../frontend/dist/index.html");
        }
        win.loadFile(htmlPath);
    }
}
electron_1.app.whenReady().then(createWindow);
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
/* =========================
   FILE SYSTEM API
========================= */
electron_1.ipcMain.handle("open-folder", async () => {
    const result = await electron_1.dialog.showOpenDialog({
        properties: ["openDirectory"]
    });
    if (result.canceled)
        return [];
    const folder = result.filePaths[0];
    function walk(dir) {
        const files = fs_1.default.readdirSync(dir);
        return files.map((file) => {
            const full = path_1.default.join(dir, file);
            const stat = fs_1.default.statSync(full);
            return {
                name: file,
                path: full,
                isDirectory: stat.isDirectory()
            };
        });
    }
    return walk(folder);
});
electron_1.ipcMain.handle("read-file", async (_, filePath) => {
    return fs_1.default.readFileSync(filePath, "utf8");
});
electron_1.ipcMain.handle("save-file", async (_, filePath, content) => {
    fs_1.default.writeFileSync(filePath, content);
    return true;
});
/* =========================
   OLLAMA API
========================= */
electron_1.ipcMain.handle("ollama-models", async () => {
    try {
        const res = await axios_1.default.get("http://localhost:11434/api/tags");
        return res.data.models || [];
    }
    catch {
        return [];
    }
});
electron_1.app.on("activate", () => {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
