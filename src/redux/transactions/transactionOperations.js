import axios from "axios";
import { getError } from "../error/handlerError";
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
    .catch((err) =>
      dispatch(
        getError({
          error: err,
          requestCallback: getIncomes,
          requestData: null,
          errorType: "transacions/getIncomesError",
        })
      )
    );
};

export const getCosts = () => (dispatch) => {
  dispatch(getCostsRequest());

  console.log(getError);
  axios
    .get("/costs")
    .then(({ data }) => dispatch(getCostsSuccess(data)))
    .catch((err) => {
      dispatch(
        getError({
          error: err,
          requestCallback: getCosts,
          requestData: null,
          errorType: "transacions/getCostsError",
        })
      );
    });
};

export const addIncomes = (data) => (dispatch) => {
  dispatch(addIncomesRequest());

  axios
    .post("/incomes", data)
    .then(({ data }) => dispatch(addIncomesSuccess(data)))
    .catch((err) =>
      dispatch(
        getError({
          error: err,
          requestCallback: addIncomes,
          requestData: data,
          errorType: "transacions/addIncomesError",
        })
      )
    );
};

export const addCosts = (data) => (dispatch) => {
  dispatch(addCostsRequest());

  axios
    .post("/costs", data)
    .then(({ data }) => dispatch(addCostsSuccess(data)))
    .catch((err) =>
      dispatch(
        getError({
          error: err,
          requestCallback: addCosts,
          requestData: data,
          errorType: "transacions/addCostsError",
        })
      )
    );
};

export const editIncomes = (data, id) => (dispatch) => {
  dispatch(editIncomesRequest());

  axios
    .patch("/incomes/" + id, data)
    .then(({ data }) => dispatch(editIncomesSuccess(data)))
    .catch((err) =>
      dispatch(
        getError({
          error: err,
          requestCallback: editIncomes,
          requestData: [data, id],
          errorType: "transacions/editIncomesError",
        })
      )
    );
};

export const editCosts = (data, id) => (dispatch) => {
  dispatch(editCostsRequest());

  axios
    .patch("/costs/" + id, data)
    .then(({ data }) => dispatch(editCostsSuccess(data)))
    .catch((err) => dispatch(getError({
      error: err,
      requestCallback: editCosts,
      requestData: [data, id],
      errorType: "transacions/editCostsError",
    })));
};
