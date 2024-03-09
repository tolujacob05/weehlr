import "./css/App.css";
import ani from "./assets/ani.gif";

function Spinner() {
  return (
    <div className="spinner">
      <img src={ani} alt="" />
    </div>
  );
}

export default Spinner;
