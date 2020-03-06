import { LOAD_PRODUCT } from '../constants/alertconstants';

const initialState = {
  loading: true,
  product: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        loading: false,
        product: payload,
      };
    default:
      return state;
  }
}
