// TODO Separate this into separate files
// https://nuxtjs.org/docs/2.x/directory-structure/store
// Replace with https://apollo.vuejs.org/guide/local-state.html#why-use-apollo-local-state-management

export const state = () => ({
  cart: [],
})

export const mutations = {
  addProductToCart(stateToChange, payload) {
    stateToChange.cart.push({ id: payload.id, product: payload })
  },

  deleteProductFromCart(stateToChange, index) {
    stateToChange.cart.splice(index, 1)
  },
}
