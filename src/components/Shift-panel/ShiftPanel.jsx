import ButtonRestart from "../Button-restart/ButtonRestart";
import "./shiftPanel.css";

export default function ShiftPanel() {
  return (
    <aside className="panel">
      <h2 className="panel__message">Shift: ⭕</h2>
      <ButtonRestart />
    </aside>
  );
}
