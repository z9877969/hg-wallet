import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutSuccess } from "../../redux/auth/authActions";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isAuth = !!useSelector((state) => state.auth.idToken);
  // const isAuth = true;
  // const isAuth = false;

  const handleLogOut = () => dispatch(logOutSuccess())

  return (
    <AuthContext.Provider value={{ isAuth, handleLogOut }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
