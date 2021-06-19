import {createAction} from '@reduxjs/toolkit';

export const loginRequest = createAction("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginError = createAction("auth/loginError");

export const signUpRequest = createAction("auth/signUpRequest");
export const signUpSuccess = createAction("auth/signUpSuccess");
export const signUpError = createAction("auth/signUpError");

// export const logOutRequest = createAction("auth/logOutRequest");
export const logOutSuccess = createAction("auth/logOutSuccess");
// export const logOutError = createAction("auth/logOutError");

export const refreshTokenRequest = createAction("error/refreshTokenRequest");
export const refreshTokenSuccess = createAction("error/refreshTokenSuccess");
export const refreshTokenError = createAction("error/refreshTokenError");