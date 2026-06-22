// Filesystem service for file operations
export const filesystemService = {
  readFile: async (path: string): Promise<string> => {
    return (window as any).api.readFile(path);
  },
  writeFile: async (path: string, content: string): Promise<boolean> => {
    return (window as any).api.saveFile(path, content);
  },
  openFolder: async (): Promise<any[]> => {
    return (window as any).api.openFolder();
  }
};