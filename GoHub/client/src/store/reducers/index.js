import { combineReducers } from 'redux';
import isLogged from './isLogged';
import alert from './alert';
import auth from './auth';
import profile from './profile';

const allReducers = combineReducers({
  isLogged,
  alert,
  auth,
  profile,
});
export default allReducers;
