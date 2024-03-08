import "./css/App.css";

function Button({ children, to, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className="btn-0">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
}

export default Button;
