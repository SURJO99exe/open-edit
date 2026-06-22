import {
  useState
} from "react";

import {
  useEditorStore
} from "../store/editorStore";

export default function
Explorer() {

  const [
    files,
    setFiles
  ] = useState<any[]>([]);

  const {
    setContent,
    setFile
  } =
  useEditorStore();

  async function
  openFolder() {

    const data =
      await (
        window as any
      ).api.openFolder();

    setFiles(data);
  }

  async function
  openFile(
    file:any
  ) {

    if(
      file.isDirectory
    ) return;

    const text =
      await (
        window as any
      ).api.readFile(
        file.path
      );

    setFile(
      file.path
    );

    setContent(
      text
    );
  }

  return (
    <div>

      <button
        onClick={
          openFolder
        }
      >
        Open Folder
      </button>

      {
        files.map(
          file => (
            <div
              key={
                file.path
              }

              onClick={() =>
                openFile(
                  file
                )
              }
            >
              {
                file.name
              }
            </div>
          )
        )
      }

    </div>
  );
}