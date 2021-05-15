import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addCosts, addIncomes } from "./transactionsActions";

const costs = createReducer([], {
  [addCosts]: (state, { payload }) => state.push(payload),
});

const incomes = createReducer([], {
  [addIncomes]: (state, { payload }) => state.push(payload),
});

export default combineReducers({
  costs,
  incomes,
});
