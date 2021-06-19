import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import AuthNav from "../_auth/AuthNav/AuthNav";
import UserBar from "../_auth/UserBar/UserBar";

const Header = () => {
  const { isAuth, handleLogOut } = useContext(AuthContext);
  return isAuth ? <UserBar logOut={handleLogOut} /> : <AuthNav />;
};

export default Header;
