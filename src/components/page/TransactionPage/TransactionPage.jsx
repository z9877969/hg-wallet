import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import moment from "moment";
import shortid from "shortid";
import CategoriesList from "../../CategoriesList/CategoriesList";
import categoryOptions from "../../../assets/options/category.db.json";
import {
  addCosts,
  addIncomes,
  editCosts,
  editIncomes,
} from "../../../redux/transactions/transactionOperations";
import TransactionForm from "../../TransactionForm/TransactionForm";
import { getTransactions } from "../../../redux/transactions/transactionSelector";

const getInitialState = (categoryId) => ({
  date: moment().format("YYYY-MM-DD"),
  time: moment().format("HH:mm"),
  category: categoryOptions[categoryId][0],
  // category: "",
  sum: "",
  currency: "",
  comment: "",
});

const TransactionPage = ({ location, history, match }) => {
  const dispatch = useDispatch();
  const {
    params: { categoryId, transId },
    url,
  } = match;

  const data = useSelector(getTransactions)[categoryId] || [];
  const initialState = transId
    ? data.find((transaction) => transaction.id === transId)
    : getInitialState(categoryId);

  const [dataForm, setDataForm] = useState(initialState);

  // const { date, time, category, sum, currency, comment } = dataForm;

  const isForm = !location.pathname.split("/").includes("categories");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleGoBack = () => {
    history.push(location.state?.from || "/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (transId) {
      categoryId === "costs" &&
        dispatch(editCosts({ ...dataForm, id: transId }));
      categoryId === "incomes" &&
        dispatch(editIncomes({ ...dataForm, id: transId }));
      handleGoBack();
      return;
    }

    categoryId === "costs" &&
      dispatch(addCosts({ ...dataForm, id: shortid.generate() }));
    categoryId === "incomes" &&
      dispatch(addIncomes({ ...dataForm, id: shortid.generate() }));
    handleGoBack();
  };

  const handleOpenCategoryList = () => {
    history.push({
      pathname: `${match.url}/categories`,
      state: {
        from: location,
      },
    });
  };

  const handleChangeCategory = (opts) => {
    setDataForm({ ...dataForm, category: opts });
    // this.setState({ category: opts });
  };

  return (
    <>
      {isForm && (
        <TransactionForm
          dataForm={dataForm}
          handleSubmit={handleSubmit}
          handleGoBack={handleGoBack}
          handleChange={handleChange}
          handleOpenCategoryList={handleOpenCategoryList}
        />
      )}
      <Route
        path={`${url}/categories`}
        render={(props) => (
          <CategoriesList
            {...props}
            // handleToggleCategoryList={handleToggleCategoryList}
            handleChangeCategory={handleChangeCategory}
            catOptions={categoryOptions[categoryId]}
          />
        )}
      />
    </>
  );
};

// const mapDispatchProps = {
//   addCosts,
//   addIncomes,
// };

export default TransactionPage;

// const con = (mSTP, mDTP) => (WrapedComponent) => {
//   //
//   return <WrapedComponent  />
// }
