import { Component } from "react";
import moment from "moment";
import CategoriesList from "../CategoriesList/CategoriesList";
import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";
import Title from "../_share/Title/Title";
import categoryOptions from "../../assets/options/category.db.json";

class TransactionPage extends Component {
  state = {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm"),
    category: categoryOptions[this.props.transId][0],
    sum: "",
    currency: "",
    comment: "",
    isCategoryList: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleGoBack = () => {
    this.props.handleToggleTransId();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {isCategoryList, ...dataForm} = this.state;
    const { handleAddTransaction, transId } = this.props;
    handleAddTransaction(transId, dataForm);
    this.handleGoBack();
  };

  handleToggleCategoryList = () => {
    this.setState((prev) => ({ isCategoryList: !prev.isCategoryList }));
  };

  handleChangeCategory = (opts) => {
    this.setState({ category: opts });
  };

  render() {
    const {
      date,
      time,
      category,
      sum,
      currency,
      comment,
      isCategoryList,
    } = this.state;

    const { transId } = this.props;

    return !isCategoryList ? (
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
            cbOnClick={this.handleToggleCategoryList}
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
    ) : (
      <CategoriesList
        handleToggleCategoryList={this.handleToggleCategoryList}
        handleChangeCategory={this.handleChangeCategory}
        catOptions={categoryOptions[transId]}
      />
    );
  }
}

export default TransactionPage;
