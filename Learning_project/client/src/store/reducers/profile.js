
import { ADDRESS_LOAD } from '../constants/alertconstants';

const initialState = {
  loading: true,
  address: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADDRESS_LOAD:
      return {
        ...state,
        loading: false,
        address: payload,
      };
    default:
      return state;
  }
}
