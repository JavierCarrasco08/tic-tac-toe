import ButtonRestart from "../button-restart/ButtonRestart";
import "./winnerPanel.css";
import "animate.css";

export default function WinnerPanel({ winner }) {
  return (
    <aside className="winner animate__animated animate__zoomInDown">
      <h2 className="winner__message">Congratulations</h2>
      <h1 className="winner__player">{winner}</h1>
      <ButtonRestart />
    </aside>
  );
}
