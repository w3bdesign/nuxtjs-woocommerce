import GET_CART_QUERY from '@/apollo/queries/GET_CART_QUERY'

export default async function useFetchWooCart(test) {
  try {
    return await test.$apollo
      .query({
        query: GET_CART_QUERY,
      })
      .then(({ data }) => {
        let cartLength = 0
        const remoteCart = data
        const subTotal = data.cart.total
        data.cart.contents.nodes.forEach(
          (argument) => (cartLength += argument.quantity)
        )
        return { remoteCart, cartLength, subTotal }
      })
  } catch (error) {
    return { remoteError: error }
  }
}
