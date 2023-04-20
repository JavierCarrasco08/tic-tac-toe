import { useState, useEffect } from "react";
import { searchCells } from "./utils/searchCells";
import { RestartContext } from "./context/restart";
import "./App.css";
import ShiftPanel from "./components/shift-panel/ShiftPanel";
import SocialMedia from "./components/social-media/SocialMedia";
import WinnerPanel from "./components/winner-panel/WinnerPanel";
import TicTacToe from "./components/Tic-tac-toe/TicTacToe";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState(true);
  const [win, setWin] = useState(null);
  useEffect(() => {
    let result = searchCells(cells, 0);
    if (result) {
      setWin(result);
    }
  }, [cells]);
  function handleClickRestart() {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setTurn(true);
    setWin(null);
  }
  function handleClickAdd(id) {
    setCells(
      cells.map((e, index) => {
        if (index === id) {
          return turn ? "⭕" : "❌";
        } else {
          return e;
        }
      })
    );
    setTurn(!turn);
  }
  return (
    <>
      <RestartContext.Provider value={handleClickRestart}>
        {win ? (
          <WinnerPanel winner={win} />
        ) : (
          <main className="container">
            <ShiftPanel turn={turn ? "⭕" : "❌"} />
            <TicTacToe cells={cells} onAdd={handleClickAdd} />
          </main>
        )}
        <footer className="foo">
          <SocialMedia />
        </footer>
      </RestartContext.Provider>
    </>
  );
}

export default App;
