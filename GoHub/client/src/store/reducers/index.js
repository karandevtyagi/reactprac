import { combineReducers } from 'redux';
import isLogged from './isLogged';
import alert from './alert';
import auth from './auth';

const allReducers = combineReducers({
  isLogged,
  alert,
  auth,
});
export default allReducers;
