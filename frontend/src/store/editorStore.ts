import { create } from "zustand";

interface State {

  currentFile: string;

  content: string;

  saved: boolean;

  setSaved:
    (saved:boolean)=>void;

  setFile:
    (file:string)=>void;

  setContent:
    (content:string)=>void;
}

export const useEditorStore =
create<State>((set)=>({

  currentFile:"",

  content:"",

  saved:true,

  setSaved:
    saved =>
      set({saved}),

  setFile:
    file =>
      set({
        currentFile:file
      }),

  setContent:
    content =>
      set({
        content,
        saved:false
      })
}));