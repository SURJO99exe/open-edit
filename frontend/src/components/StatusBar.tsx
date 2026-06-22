import {
  useEditorStore
}
from "../store/editorStore";

export default function StatusBar(){

  const {
    saved
  } =
  useEditorStore();

  return(

    <div
      style={{
        height:"24px",
        background:"#007acc",
        color:"white",
        display:"flex",
        justifyContent:
          "space-between",
        padding:"0 10px",
        alignItems:"center"
      }}
    >

      <span>
        Open Editor
      </span>

      <span>

        {
          saved
          ? "Saved"
          : "Saving..."
        }

      </span>

      <span>
        Developed by Dev Surjo
      </span>

    </div>
  );
}