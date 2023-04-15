import ButtonRestart from "../Button-restart/ButtonRestart";
import "./winnerPanel.css";

export default function WinnerPanel() {
  return (
    <article className="winner">
      <h2 className="winner__message">Congratulations</h2>
      <h1 className="winner__player">❌</h1>
      <ButtonRestart />
    </article>
  );
}
