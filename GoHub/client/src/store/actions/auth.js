import AuthenticationService from '../../services/AuthenticationService';
import setAlert from './alert';
import {
  REGISTER_SUCCESS, REGISTER_FAILURE, AUTH_ERROR, USER_LOADED,
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
// Register
const register = (user) => async (dispatch) => {
  try {
    const res = await AuthenticationService.register(user);
    console.log(res);
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
