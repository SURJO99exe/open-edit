import { useEffect } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

export default function TerminalView() {

  useEffect(() => {
    const terminal = new Terminal();

    terminal.open(
      document.getElementById("terminal")!
    );

    terminal.write(
      "AI Editor Ready\r\n"
    );

  }, []);

  return (
    <div
      id="terminal"
      style={{
        height: "300px"
      }}
    />
  );
}