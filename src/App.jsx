import { useState } from "react";
import "./App.css";
import ShiftPanel from "./components/Shift-panel/ShiftPanel";
import SocialMedia from "./components/Social-media/SocialMedia";
import WinnerPanel from "./components/Winner-panel/WinnerPanel";
import TicTacToe from "./components/Tic-tac-toe/TicTacToe";

function App() {
  const [top, setTop] = useState(["", "", ""]);
  const [center, setCenter] = useState(["", "", ""]);
  const [bottom, setBottom] = useState(["", "", ""]);

  return (
    <>
      <main className="container">
        <ShiftPanel />
        <TicTacToe top={top} center={center} bottom={bottom} />
      </main>
      <footer className="foo">
        <SocialMedia />
      </footer>
    </>
  );
}

export default App;
