import "./App.css";
import MainPage from "../MainPage/MainPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import { Component } from "react";

class App extends Component {
  state = {
    incomes: [],
    costs: [],
    transId: "",
  };

  componentDidMount() {
    const incomesLS = localStorage.getItem("incomes");
    const costsLS = localStorage.getItem("costs");
    console.log('incomesLS, costsLS :>> ', incomesLS, costsLS);
    const incomes = incomesLS ? JSON.parse(incomesLS) : [];
    const costs = costsLS ? JSON.parse(costsLS) : [];
    this.setState({ incomes, costs });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.incomes !== this.state.incomes) {
      localStorage.setItem("incomes", JSON.stringify(this.state.incomes));
    }
    if (prevState.costs !== this.state.costs) {
      localStorage.setItem("costs", JSON.stringify(this.state.costs));
    }
  }

  handleAddTransaction = (transId, transaction) => {
    this.setState((prev) => ({ [transId]: [...prev[transId], transaction] }));
  };

  handleToggleTransId = (transId = "") => {
    this.setState({ transId });
  };

  render() {
    const { transId } = this.state;
    return (
      <>
        <h1>App Page</h1>
        {!transId ? (
          <MainPage handleToggleTransId={this.handleToggleTransId} />
        ) : (
          <TransactionPage
            transId={transId}
            handleToggleTransId={this.handleToggleTransId}
            handleAddTransaction={this.handleAddTransaction}
          />
        )}
      </>
    );
  }
}

export default App;
