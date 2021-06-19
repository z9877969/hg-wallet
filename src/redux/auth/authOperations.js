import axios from "axios";
import {
  loginError,
  loginRequest,
  loginSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
} from "./authActions";
import { signIn, signUp } from "../../services/firebaseApi";

export const signUpOper = (data) => (dispatch) => {
  dispatch(signUpRequest());

  signUp(data)
    .then((data) => dispatch(signUpSuccess(data)))
    .catch((e) => dispatch(signUpError(e.message)));
};

export const logInOper = (data) => (dispatch) => {
  dispatch(loginRequest());

  signIn(data)
    .then((data) => dispatch(loginSuccess(data)))
    .catch((e) => dispatch(loginError(e.message)));
};

export const refreshOperation =
  (requestCallback, requestData) => (dispatch, getStore) => {
    dispatch(refreshTokenRequest());

    const {
      auth: { refreshToken },
    } = getStore;

    const data = {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    };

    axios
      .post(
        "https://securetoken.googleapis.com/v1/token?key=AIzaSyCRFI_dZqdUgbia23ytk0ieVoSex3J7HCY",
        data
      )
      .then((data) =>
        dispatch(
          refreshTokenSuccess({
            idToken: data.id_token,
            refreshToken: data.refresh_token,
            userId: data.user_id,
          })
        )
      )
      .then(() => dispatch(requestCallback(...requestData)))
      .catch((e) => {
        dispatch(refreshTokenError(e.message));
      });
  };
