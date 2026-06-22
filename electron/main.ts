import { app, BrowserWindow, dialog, ipcMain } from "electron";
import fs from "fs";
import path from "path";
import axios from "axios";

let win: BrowserWindow | null = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1600,
    height: 900,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Load from built files in production, dev server in development
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    // In production, load from the built frontend files
    // With standard electron-builder packaging, files are in app.asar
    const isPackaged = app.isPackaged;
    let htmlPath: string;
    
    if (isPackaged) {
      // In packaged app, use resources path
      htmlPath = path.join(process.resourcesPath, "app.asar", "frontend", "dist", "index.html");
    } else {
      // In development, use relative path
      htmlPath = path.join(__dirname, "../frontend/dist/index.html");
    }
    
    win.loadFile(htmlPath);
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

/* =========================
   FILE SYSTEM API
========================= */

ipcMain.handle("open-folder", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openDirectory"]
  });

  if (result.canceled) return [];

  const folder = result.filePaths[0];

  function walk(dir: string) {
    const files = fs.readdirSync(dir);

    return files.map((file) => {
      const full = path.join(dir, file);
      const stat = fs.statSync(full);

      return {
        name: file,
        path: full,
        isDirectory: stat.isDirectory()
      };
    });
  }

  return walk(folder);
});

ipcMain.handle("read-file", async (_, filePath) => {
  return fs.readFileSync(filePath, "utf8");
});

ipcMain.handle("save-file", async (_, filePath, content) => {
  fs.writeFileSync(filePath, content);
  return true;
});

/* =========================
   OLLAMA API
========================= */

ipcMain.handle("ollama-models", async () => {
  try {
    const res = await axios.get(
      "http://localhost:11434/api/tags"
    );

    return res.data.models || [];
  } catch {
    return [];
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});