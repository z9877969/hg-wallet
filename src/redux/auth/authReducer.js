import { createReducer } from "@reduxjs/toolkit";
import { loginSuccess, logOutSuccess, signUpSuccess } from "./authActions";

const initialState = {
  idToken: null,
  userId: null,
  refreshToken: null,
};

const authReducer = createReducer(initialState, {
  [loginSuccess]: (_, { payload: { idToken, userId, refreshToken } }) => ({
    idToken,
    userId,
    refreshToken,
  }),
  [signUpSuccess]: (_, { payload: { idToken, userId, refreshToken } }) => ({
    idToken,
    userId,
    refreshToken,
  }),
  [logOutSuccess]: () => initialState,
});

export default authReducer;
