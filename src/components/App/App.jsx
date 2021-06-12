import { useEffect } from "react";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import MainPage from "../MainPage/MainPage";
import TransCatsListPage from "../page/TransCatsListPage";
import TransactionPage from "../page/TransactionPage/TransactionPage";
import "./App.css";
import {
  getCosts,
  getIncomes,
} from "../../redux/transactions/transactionOperations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomes());
    dispatch(getCosts());
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/:categoryId/edit/:transId" component={TransactionPage} />
        <Route path="/:categoryId/add" component={TransactionPage} />
        <Route path="/:categoryId/list" component={TransCatsListPage} />
      </Switch>
    </>
  );
}

export default App;
