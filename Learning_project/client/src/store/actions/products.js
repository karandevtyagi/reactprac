import ProductService from '../../services/ProductService';
import { LOAD_PRODUCT } from '../constants/alertconstants';
import setAlert from './alert';

const showProducts = () => async (dispatch) => {
  try {
    const response = await ProductService.show();
    dispatch({
      type: LOAD_PRODUCT,
      payload: response.data,
    });
  } catch (err) {
    const errors = err.response.data.error;
    if (errors) {
      dispatch(setAlert(errors));
    }
  }
};
export const getProduct = (id) => async (dispatch) => {
  try {
    const response = await ProductService.getProduct(id);
    dispatch({
      type: LOAD_PRODUCT,
      payload: response.data,
    });
  } catch (err) {
    const errors = err.response.data.error;
    if (errors) {
      dispatch(setAlert(errors));
    }
  }
};
export default showProducts;
