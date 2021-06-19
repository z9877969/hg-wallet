import Button from "../../_share/Button/Button";
import LabelInput from "../../_share/LabelInput/LabelInput";

const AuthForm = ({
  initialValues,
  handleChangeLocation,
  handleChangeInput,
  handleSubmit,
  formName,
}) => {
  const { email, password } = initialValues;
  return (
    <form onSubmit={handleSubmit}>
      <LabelInput
        title="Email"
        name="email"
        value={email}
        cbOnChange={handleChangeInput}
      />
      <LabelInput
        title="Password"
        name="password"
        value={password}
        cbOnChange={handleChangeInput}
      />
      <Button
        type="submit"
        title={formName === "login" ? "LogIn" : "Register"}
      />
      <Button
        title={formName === "login" ? "Register" : "LogIn"}
        cbOnClick={handleChangeLocation}
      />
    </form>
  );
};

export default AuthForm;
