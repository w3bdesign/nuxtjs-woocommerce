// import { uid } from 'uid'

export default {
  addProductToCart(state, payload) {
    state.cart.push({ id: payload.id, product: payload })
  },

  deleteProductFromCart(state, index) {
    state.cart.splice(index, 1)
  },
}
