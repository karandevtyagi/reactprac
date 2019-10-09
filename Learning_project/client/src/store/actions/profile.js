import ProfileService from '../../services/ProfileService';
import { USER_LOADED, ADDRESS_LOAD } from '../constants/alertconstants';
import setAlert from './alert';
import setAuthToken from '../../utils/setAuthToken';


export const updateProfile = (data) => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await ProfileService.update(data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
    dispatch(setAlert('PROFILE UPDATED'));
  } catch (err) {
    const errors = err.response.data.error;
    if (errors) {
      dispatch(setAlert(errors));
    }
  }
};
export const loadAddress = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const response = await ProfileService.address();
    dispatch({
      type: ADDRESS_LOAD,
      payload: response.data,
    });
  } catch (err) {
    const errors = err.response.data.error;
    if (errors) {
      dispatch(setAlert(errors));
    }
  }
};
