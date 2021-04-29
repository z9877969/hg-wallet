const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  cbOnChange,
  cbOnClick,
  placeholder = "",
}) => {
  return (
    <label>
      <span>{title}</span>
      {cbOnClick && (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onClick={cbOnClick}
        />
      )}
      {cbOnChange && (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={cbOnChange}
        />
      )}
    </label>
  );
};

export default LabelInput;
