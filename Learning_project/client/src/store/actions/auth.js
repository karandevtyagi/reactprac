import AuthenticationService from '../../services/AuthenticationService';
import setAlert from './alert';
import {
  REGISTER_SUCCESS, REGISTER_FAILURE, AUTH_ERROR, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT,
} from '../constants/alertconstants';
import setAuthToken from '../../utils/setAuthToken';
// load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await AuthenticationService.load();
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
// login
export const login = (logindetails) => async (dispatch) => {
  try {
    const res = await AuthenticationService.login(logindetails);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.error;
    if (errors) {
      dispatch(setAlert(errors));
    }
    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};
// logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
// Register
const register = (user) => async (dispatch) => {
  try {
    const res = await AuthenticationService.register(user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.error;
    if (errors) {
      dispatch(setAlert(errors));
    }
    dispatch({
      type: REGISTER_FAILURE,
    });
  }
};

export default register;
