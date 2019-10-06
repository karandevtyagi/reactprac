import AuthenticationService from '../../services/AuthenticationService';

function login(user) {
  return (dispatch) => AuthenticationService.login(user).then((res) => {
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({
      type: 'LOGIN_SUCCESS',
      data: res.data,
    });
  });
}
function logout() {
  localStorage.removeItem('user');
  return {
    type: 'LOGOUT',
  };
}
export default {
  login,
  logout,
};
