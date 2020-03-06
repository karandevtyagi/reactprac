import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import address from './address';
import products from './products';

const allReducers = combineReducers({
  alert,
  auth,
  profile,
  address,
  products,
});
export default allReducers;
