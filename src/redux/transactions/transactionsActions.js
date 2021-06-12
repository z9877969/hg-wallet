import {createAction} from '@reduxjs/toolkit';

export const getIncomesRequest = createAction('transacions/getIncomesRequest')
export const getIncomesSuccess = createAction('transacions/getIncomesSuccess')
export const getIncomesError = createAction('transacions/getIncomesError')
// export const getCosts = createAction('transacions/getCosts');

export const getCostsRequest = createAction('transacions/getCostsRequest')
export const getCostsSuccess = createAction('transacions/getCostsSuccess')
export const getCostsError = createAction('transacions/getCostsError')

export const addIncomesRequest = createAction('transacions/addIncomesRequest')
export const addIncomesSuccess = createAction('transacions/addIncomesSuccess')
export const addIncomesError = createAction('transacions/addIncomesError')
// export const addCosts = createAction('transacions/addCosts');

export const addCostsRequest = createAction('transacions/addCostsRequest')
export const addCostsSuccess = createAction('transacions/addCostsSuccess')
export const addCostsError = createAction('transacions/addCostsError')
// export const addIncomes = createAction('transacions/addIncomes');


export const editIncomesRequest = createAction('transacions/editIncomesRequest')
export const editIncomesSuccess = createAction('transacions/editIncomesSuccess')
export const editIncomesError = createAction('transacions/editIncomesError')
// export const editCosts = createAction('transacions/editCosts');

export const editCostsRequest = createAction('transacions/editCostsRequest')
export const editCostsSuccess = createAction('transacions/editCostsSuccess')
export const editCostsError = createAction('transacions/editCostsError')
// export const editCosts = createAction('transactions/editCosts');
// export const editIncomes = createAction('transactions/editIncomes');