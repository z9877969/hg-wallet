const Button = ({ title, type = "button", cbOnClick }) => {
  return cbOnClick ? (
    <button type={type} onClick={cbOnClick}>
      {title}
    </button>
  ) : (
    <button type={type}>{title}</button>
  );
};

export default Button;
