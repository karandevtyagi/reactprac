import Api from './Api';


export default {
  update(data) {
    return Api().post('profile', data);
  },
  address() {
    return Api().get('profile/address');
  },
  showAddress(addressId) {
    return Api().get(`/profile/address/${addressId}`);
  },
  updateAddress(addressId, data) {
    return Api().post(`profile/address/update/${addressId}`, data);
  },
  deleteAddress(addressId) {
    return Api().delete(`profile/address/delete/${addressId}`);
  },
  addAddress(data) {
    return Api().post('/profile/address', data);
  },
};
