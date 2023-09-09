import "./App.css";
import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState<string>("");

  return (
    <div className="App">
      <div className="title">
        <b>Fakey</b>, the{" "}
        <i className="side-padding">only</i> news detector
        you need
      </div>
      <div
        className={
          answer === "True"
            ? "answer correct"
            : answer === "Loading..."
            ? "answer loading"
            : "answer wrong"
        }
      >
        {answer}
      </div>
      <div
        className="submit-bottom"
        onClick={async () => {
          setAnswer("Loading...");
          await new Promise((res) => setTimeout(res, 1000));
          setAnswer("True");
        }}
        onContextMenu={async (e) => {
          e.preventDefault();
          setAnswer("Loading...");
          await new Promise((res) => setTimeout(res, 1000));
          setAnswer("False");
        }}
      >
        Detect
      </div>
    </div>
  );
}

export default App;
