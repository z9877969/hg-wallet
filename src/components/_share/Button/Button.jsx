const Button = ({ title, type = "button", cbOnClick, cbArgs, className }) => {
  return cbOnClick ? (
    <button
      className={className}
      type={type}
      onClick={cbArgs ? () => cbOnClick(...cbArgs) : cbOnClick}
    >
      {title}
    </button>
  ) : (
    <button className={className} type={type}>
      {title}
    </button>
  );
};

export default Button;
