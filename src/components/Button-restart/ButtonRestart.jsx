import { useContext } from "react";
import "./buttonRestart.css";
import { RestartContext } from "../../context/restart";

export default function ButtonRestart() {
  const Restart = useContext(RestartContext);
  return (
    <button className="restart" onPointerDown={Restart}>
      Restart
    </button>
  );
}
