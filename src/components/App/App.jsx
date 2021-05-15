import { Route, Switch } from "react-router";
import MainPage from "../MainPage/MainPage";
import TransCatsListPage from "../page/TransCatsListPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/:transId/add" component={TransactionPage} />
        <Route path="/:transId/list" component={TransCatsListPage}/>
      </Switch>
    </>
  );
}

export default App;
