import ButtonRestart from "../Button-restart/ButtonRestart";
import "./shiftPanel.css";

export default function ShiftPanel({ turn }) {
  return (
    <aside className="panel">
      <h2 className="panel__message">Shift: {turn}</h2>
      <ButtonRestart />
    </aside>
  );
}
