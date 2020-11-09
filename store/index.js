export const state = () => ({
  cart: [{ id: 0, name: 'Test product', quantity: 1 }],
})

export const mutations = {
  addProductToCart(state, payload) {
    state.cart.push({ id: payload.id, product: payload })
  },

  deleteProductFromCart(state, index) {
    state.cart.splice(index, 1)
  },
}
