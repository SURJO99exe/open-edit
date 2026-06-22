import Explorer from "./components/Explorer";
import StatusBar from "./components/StatusBar";
import Editor from "./components/Editor";
import AIChat from "./components/AIChat";
import TerminalView from "./components/Terminal";

export default function App() {

  return (
    <div className="layout">

      <div className="left">
        <Explorer />
      </div>

      <div className="center">
        <Editor />
      </div>

      <div className="right">
        <AIChat />
      </div>

      <div className="bottom">
        <TerminalView />
      </div>

      <StatusBar />

    </div>
  );
}