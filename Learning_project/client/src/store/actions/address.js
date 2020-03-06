import ProfileService from '../../services/ProfileService';
import { SHOW_ADDRESS } from '../constants/alertconstants';
import setAlert from './alert';
import setAuthToken from '../../utils/setAuthToken';

const showAddress = (id) => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const response = await ProfileService.showAddress(id);
    dispatch({
      type: SHOW_ADDRESS,
      payload: response.data,
    });
  } catch (err) {
    const errors = err.response.data.error;
    if (errors) {
      dispatch(setAlert(errors));
    }
  }
};
export default showAddress;
