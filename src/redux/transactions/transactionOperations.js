import axios from "axios";
import {
  addCostsError,
  addCostsRequest,
  addCostsSuccess,
  addIncomesError,
  addIncomesRequest,
  addIncomesSuccess,
  editCostsError,
  editCostsRequest,
  editCostsSuccess,
  editIncomesError,
  editIncomesRequest,
  editIncomesSuccess,
  getCostsError,
  getCostsRequest,
  getCostsSuccess,
  getIncomesError,
  getIncomesRequest,
  getIncomesSuccess,
} from "./transactionsActions";

axios.defaults.baseURL = "http://localhost:4040/";

export const getIncomes = () => (dispatch) => {
  dispatch(getIncomesRequest());

  axios
    .get("/incomes")
    .then(({ data }) => dispatch(getIncomesSuccess(data)))
    .catch((err) => dispatch(getIncomesError(err.message)));
};

export const getCosts = () => (dispatch) => {
  dispatch(getCostsRequest());

  axios
    .get("/costs")
    .then(({ data }) => dispatch(getCostsSuccess(data)))
    .catch((err) => dispatch(getCostsError(err.message)));
};

export const addIncomes = (data) => (dispatch) => {
  dispatch(addIncomesRequest());

  axios
    .post("/incomes", data)
    .then(({ data }) => dispatch(addIncomesSuccess(data)))
    .catch((err) => dispatch(addIncomesError(err.message)));
};

export const addCosts = (data) => (dispatch) => {
  dispatch(addCostsRequest());

  axios
    .post("/costs", data)
    .then(({ data }) => dispatch(addCostsSuccess(data)))
    .catch((err) => dispatch(addCostsError(err.message)));
};

export const editIncomes = (data, id) => (dispatch) => {
  dispatch(editIncomesRequest());

  axios
    .patch("/incomes/" + id, data)
    .then(({ data }) => dispatch(editIncomesSuccess(data)))
    .catch((err) => dispatch(editIncomesError(err.message)));
};

export const editCosts = (data, id) => (dispatch) => {
  dispatch(editCostsRequest());

  axios
    .patch("/costs/" + id, data)
    .then(({ data }) => dispatch(editCostsSuccess(data)))
    .catch((err) => dispatch(editCostsError(err.message)));
};
