import { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import moment from "moment";
import CategoriesList from "../CategoriesList/CategoriesList";
import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";
import Title from "../_share/Title/Title";
import categoryOptions from "../../assets/options/category.db.json";
import {
  addCosts,
  addIncomes,
} from "../../redux/transactions/transactionsActions";

class TransactionPage extends Component {
  state = {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm"),
    category: categoryOptions[this.props.match.params.transId][0],
    // category: "",
    sum: "",
    currency: "",
    comment: "",
    // isCategoryList: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location.state?.from || "/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { transId } = this.props.match.params;
    const { addCosts, addIncomes } = this.props;
    transId === "costs" && addCosts(this.state);
    transId === "incomes" && addIncomes(this.state);
    this.handleGoBack();
  };

  handleOpenCategoryList = () => {
    const { history, match, location } = this.props;
    history.push({
      pathname: `${match.url}/categories`,
      state: {
        from: location,
      },
    });
  };

  handleChangeCategory = (opts) => {
    this.setState({ category: opts });
  };

  render() {
    const { date, time, category, sum, currency, comment, isCategoryList } =
      this.state;

    const { location } = this.props;
    const {
      params: { transId },
      url,
    } = this.props.match;

    const isForm = !location.pathname.split("/").includes("categories");

    return (
      <>
        {isForm && (
          <form onSubmit={this.handleSubmit}>
            <Title title="TransactionPage" />

            <Button title="GoBack" cbOnClick={this.handleGoBack} />
            <Title />
            <Button title="OK" type="submit" />
            <div>
              <LabelInput
                type="date"
                title="День"
                name="date"
                value={date}
                cbOnChange={this.handleChange}
              />
            </div>
            <div>
              <LabelInput
                type="time"
                title="Время"
                name="time"
                value={time}
                cbOnChange={this.handleChange}
              />
            </div>
            <div>
              <LabelInput
                title="Категория"
                type="button"
                name="category"
                value={category.title}
                cbOnClick={this.handleOpenCategoryList}
              />
            </div>
            <div>
              <LabelInput
                title="Сумма"
                name="sum"
                value={sum}
                cbOnChange={this.handleChange}
                placeholder="Сумма..."
              />
            </div>
            <div>
              <LabelInput
                title="Валюта"
                type="button"
                name="currency"
                value={"UAH"}
                cbOnClick={() => {}}
              />
            </div>
            <div>
              <LabelInput
                title="Комментарий"
                name="comment"
                value={comment}
                cbOnChange={this.handleChange}
                placeholder="Комментарий"
              />
            </div>
          </form>
        )}
        <Route
          path={`${url}/categories`}
          render={(props) => (
            <CategoriesList
              {...props}
              handleToggleCategoryList={this.handleToggleCategoryList}
              handleChangeCategory={this.handleChangeCategory}
              catOptions={categoryOptions[transId]}
            />
          )}
        />
      </>
    );
  }
}

const mapDispatchProps = {
  addCosts,
  addIncomes,
};

export default connect(null, mapDispatchProps)(TransactionPage);

// const con = (mSTP, mDTP) => (WrapedComponent) => {
//   //
//   return <WrapedComponent  />
// }
