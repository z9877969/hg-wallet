import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { logInOper, signUpOper } from "../../redux/auth/authOperations";
import AuthForm from "../_auth/AuthForm/AuthForm";

const AuthPage = ({ history, match }) => {
  const dispatch = useDispatch();

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const { path } = match;
  const formName = path.slice(1);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleChangeLocation = () => {
    formName === "login" && history.push("/register");
    formName === "register" && history.push("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(path);
    path === "/login" && dispatch(logInOper(dataForm));
    path === "/register" && dispatch(signUpOper(dataForm));
  };

  return (
    <AuthForm
      initialValues={dataForm}
      formName={formName}
      handleChangeInput={handleChangeInput}
      handleSubmit={handleSubmit}
      handleChangeLocation={handleChangeLocation}
    />
  );
};

export default AuthPage;
