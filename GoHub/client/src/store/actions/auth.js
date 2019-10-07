import AuthenticationService from '../../services/AuthenticationService';
import setAlert from './alert';
import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/alertconstants';
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
