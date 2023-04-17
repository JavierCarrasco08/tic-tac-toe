import { useState } from "react";
import { RestartContext } from "./context/restart";
import "./App.css";
import ShiftPanel from "./components/Shift-panel/ShiftPanel";
import SocialMedia from "./components/Social-media/SocialMedia";
import WinnerPanel from "./components/Winner-panel/WinnerPanel";
import TicTacToe from "./components/Tic-tac-toe/TicTacToe";

function App() {
  const [top, setTop] = useState(["", "", ""]);
  const [center, setCenter] = useState(["", "", ""]);
  const [bottom, setBottom] = useState(["", "", ""]);
  const [turn, setTurn] = useState(true);
  function handleClickRestart() {
    setTop(["", "", ""]);
    setCenter(["", "", ""]);
    setBottom(["", "", ""]);
    setTurn(true);
  }
  return (
    <>
      <RestartContext.Provider value={handleClickRestart}>
        <main className="container">
          <ShiftPanel turn={turn ? "⭕" : "❌"} />
          <TicTacToe top={top} center={center} bottom={bottom} />
        </main>
        <footer className="foo">
          <SocialMedia />
        </footer>
      </RestartContext.Provider>
    </>
  );
}

export default App;
