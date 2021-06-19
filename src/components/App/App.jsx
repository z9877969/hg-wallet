import { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import { useDispatch } from "react-redux";
import MainPage from "../MainPage/MainPage";
import TransCatsListPage from "../page/TransCatsListPage";
import TransactionPage from "../page/TransactionPage/TransactionPage";
import AuthPage from "../page/AuthPage";
import Header from "../Header/Header";
import "./App.css";
import {
  getCosts,
  getIncomes,
} from "../../redux/transactions/transactionOperations";
import { AuthContext } from "../AuthContext/AuthContext";

function App() {
  const dispatch = useDispatch();

  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) {
      dispatch(getIncomes());
      dispatch(getCosts());
    }
  }, [isAuth]);

  return (
    <>
      <Header />

      {isAuth ? (
        <>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route
              path="/:categoryId/edit/:transId"
              component={TransactionPage}
            />
            <Route path="/:categoryId/add" component={TransactionPage} />
            <Route path="/:categoryId/list" component={TransCatsListPage} />
            <Redirect to="/" />
          </Switch>
        </>
      ) : (
        <Switch>
          <Route path={"/login"} component={AuthPage} />
          <Route path={"/register"} component={AuthPage} />
          <Redirect to="/login" />
        </Switch>
      )}
    </>
  );
}

export default App;
