import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addCosts,
  addCostsSuccess,
  addIncomes,
  addIncomesSuccess,
  editCosts,
  editCostsSuccess,
  editIncomes,
  editIncomesSuccess,
  getCostsSuccess,
  getIncomesSuccess,
} from "./transactionsActions";

const costs = createReducer([], {
  [getCostsSuccess]: (_, { payload }) => [...payload],
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
  [editCostsSuccess]: (state, { payload }) => {
    const filteredState = state.filter(({ id }) => id !== payload.id);
    return [...filteredState, payload];
  },
});

const incomes = createReducer([], {
  [getIncomesSuccess]: (_, { payload }) => [...payload],
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
  [editIncomesSuccess]: (state, { payload }) => {
    const filteredState = state.filter(({ id }) => id !== payload.id);
    return [...filteredState, payload];
  },
});

export default combineReducers({
  costs,
  incomes,
});
