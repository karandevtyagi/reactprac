import uuid from 'uuid';
import { SET_ALERT } from '../constants/alertconstants';

const setAlert = (msg) => (dispatch) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: {
      msg, id,
    },
  });
};
export default setAlert;
