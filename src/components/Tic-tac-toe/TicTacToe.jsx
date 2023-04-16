import "./ticTacToe.css";

export default function TicTacToe({ top, center, bottom }) {
  return (
    <table className="tic-tac-toe">
      <tbody>
        <tr className="tic-tac-toe__top">
          {top.map((tic, index) => (
            <td className="tic-tac-toe__td--top" key={index}>
              {tic}
            </td>
          ))}
        </tr>
        <tr className="tic-tac-toe__center">
          {center.map((tic, index) => (
            <td className="tic-tac-toe__td--center" key={index}>
              {tic}
            </td>
          ))}
        </tr>
        <tr className="tic-tac-toe__bottom">
          {bottom.map((tic, index) => (
            <td className="tic-tac-toe__td--bottom" key={index}>
              {tic}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
