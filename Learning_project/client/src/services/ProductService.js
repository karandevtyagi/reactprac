import Api from './Api';


export default {
  show() {
    return Api().get('products');
  },
  getProduct(id) {
    return Api().get(`products/${id}`);
  },
  addToCart(data) {
    return Api().post('cart', data);
  },
  displayCart() {
    return Api().get('cart');
  },
  removeCartItem(id) {
    return Api().delete(`cart/${id}`);
  },
};
