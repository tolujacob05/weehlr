import "./css/App.css";

function Button({ children, to, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  );
}

export default Button;
