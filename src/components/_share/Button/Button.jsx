const Button = ({ title, type = "button", cbOnClick, className }) => {
  return cbOnClick ? (
    <button className={className} type={type} onClick={cbOnClick}>
      {title}
    </button>
  ) : (
    <button className={className} type={type}>
      {title}
    </button>
  );
};

export default Button;
