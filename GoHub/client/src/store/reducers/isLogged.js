const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        loggingIn: true,
        user: action.data,
      };
    case 'LOGUT':
      return {};
    default:
      return state;
  }
}
