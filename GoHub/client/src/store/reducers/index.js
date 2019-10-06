import { combineReducers } from 'redux';
import isLogged from './isLogged';
import alert from './alert'

const allReducers = combineReducers({
  isLogged,
  alert
});
export default allReducers;
