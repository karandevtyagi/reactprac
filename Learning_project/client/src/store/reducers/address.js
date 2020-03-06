import { SHOW_ADDRESS } from '../constants/alertconstants';

const initialState = {
  loading: true,
  address: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ADDRESS:
      return {
        ...state,
        loading: false,
        address: payload,
      };
    default:
      return state;
  }
}
