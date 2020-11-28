import GET_CART_QUERY from '@/apollo/queries/GET_CART_QUERY'

export default async function useFetchWooCart(client) {
  try {
    return await client.$apollo
      .query({
        query: GET_CART_QUERY,
      })
      .then(({ data }) => {
        const remoteCart = data
        const subTotal = data.cart.total
        const cartLength = data.cart.contents.nodes.reduce(
          (accumulator, argument) => accumulator + argument.quantity,
          0
        )

        return { remoteCart, cartLength, subTotal }
      })
  } catch (error) {
    return { remoteError: error }
  }
}
