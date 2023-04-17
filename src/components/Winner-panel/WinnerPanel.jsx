import ButtonRestart from "../button-restart/ButtonRestart";
import "./winnerPanel.css";

export default function WinnerPanel() {
  return (
    <aside className="winner">
      <h2 className="winner__message">Congratulations</h2>
      <h1 className="winner__player">❌</h1>
      <ButtonRestart />
    </aside>
  );
}
