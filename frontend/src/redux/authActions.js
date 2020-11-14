import * as ACTIONS from "./Constants";
import { login, signup, logout } from "../api/apiCalls";

export const logoutSuccess = () => {
  return async function (dispatch) {
    try {
      await logout();
    } catch (error) {}

    dispatch({
      type: ACTIONS.LOGOUT_SUCCESS,
    });
  };
};

export const loginSuccess = (authState) => {
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    payload: authState,
  };
};

export const updateSuccess = ({ email, name, surname }) => {
  return {
    type: ACTIONS.UPDATE_SUCCESS,
    payload: {
      email,
      name,
      surname,
    },
  };
};

export const loginHandler = (credentials) => {
  return async function (dispatch) {
    const response = await login(credentials);
    const userInfo = { ...response.data.user };

    const authState = {
      id: userInfo.id,
      email: userInfo.email,
      name: userInfo.name,
      surname: userInfo.surname,
      role: userInfo.role,
      token: response.data.token,
    };

    dispatch(loginSuccess(authState));

    return response;
  };
};

export const signupHandler = (user) => {
  return async function (dispatch) {
    const response = await signup(user);
    return response;
  };
};
