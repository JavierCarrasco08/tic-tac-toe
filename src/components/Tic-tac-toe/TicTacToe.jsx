import "./ticTacToe.css";

export default function TicTacToe({ cells, onAdd }) {
  let top = cells.filter((e, index) => index < 3);
  let center = cells.filter((e, index) => index >= 3 && index < 6);
  let bottom = cells.filter((e, index) => index >= 6);
  return (
    <table className="tic-tac-toe">
      <tbody>
        <tr className="tic-tac-toe__top">
          {top.map((tic, index) => (
            <td
              className="tic-tac-toe__td--top"
              key={index}
              onPointerDown={() => onAdd("top", index)}>
              {tic}
            </td>
          ))}
        </tr>
        <tr className="tic-tac-toe__center">
          {center.map((tic, index) => (
            <td
              className="tic-tac-toe__td--center"
              key={index}
              onPointerDown={() => onAdd("center", index)}>
              {tic}
            </td>
          ))}
        </tr>
        <tr className="tic-tac-toe__bottom">
          {bottom.map((tic, index) => (
            <td
              className="tic-tac-toe__td--bottom"
              key={index}
              onPointerDown={() => onAdd("bottom", index)}>
              {tic}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
