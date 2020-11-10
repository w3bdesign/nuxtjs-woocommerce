export const state = () => ({
  cart: [{ id: 0, name: 'Test product', quantity: 1 }],
})

export const mutations = {
  addProductToCart(stateToChange, payload) {
    stateToChange.cart.push({ id: payload.id, product: payload })
  },

  deleteProductFromCart(stateToChange, index) {
    stateToChange.cart.splice(index, 1)
  },
}
