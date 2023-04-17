import { cellsFormat } from "../../utils/cells";
import "./ticTacToe.css";

export default function TicTacToe({ cells, onAdd }) {
  let top = cellsFormat(cells, (e, index) => index < 3);
  let center = cellsFormat(cells, (e, index) => index >= 3 && index < 6);
  let bottom = cellsFormat(cells, (e, index) => index >= 6);
  return (
    <table className="tic-tac-toe">
      <tbody>
        <tr className="tic-tac-toe__top">
          {top.map((tic, index) => (
            <td
              className="tic-tac-toe__td--top"
              key={index}
              onPointerDown={
                tic.letter.length !== 0 ? null : () => onAdd(tic.id)
              }>
              {tic.letter}
            </td>
          ))}
        </tr>
        <tr className="tic-tac-toe__center">
          {center.map((tic, index) => (
            <td
              className="tic-tac-toe__td--center"
              key={index}
              onPointerDown={
                tic.letter.length !== 0 ? null : () => onAdd(tic.id)
              }>
              {tic.letter}
            </td>
          ))}
        </tr>
        <tr className="tic-tac-toe__bottom">
          {bottom.map((tic, index) => (
            <td
              className="tic-tac-toe__td--bottom"
              key={index}
              onPointerDown={
                tic.letter.length !== 0 ? null : () => onAdd(tic.id)
              }>
              {tic.letter}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
