import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <NavLink to="/login">SignIn</NavLink>
      <NavLink to="/register">SignUp</NavLink>
    </>
  );
};

export default AuthNav;
