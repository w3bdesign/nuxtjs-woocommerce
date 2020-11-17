import GET_CART_QUERY from '@/apollo/queries/GET_CART_QUERY'

export default async function useFetchWooCart(test) {
  try {
    return await test.$apollo
      .query({
        query: GET_CART_QUERY,
      })
      .then(({ data }) => {
        const remoteCart = data
        const cartLength = data.cart.contents.nodes[0].quantity
        const subTotal = data.cart.total
        return { remoteCart, cartLength, subTotal }
      })
  } catch (error) {
    return { remoteError: error }
  }
}
