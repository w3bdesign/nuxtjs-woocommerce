import FETCH_ALL_PRODUCTS_QUERY from '@/apollo/queries/FETCH_ALL_PRODUCTS_QUERY.gql'

export default async function useFetchAllProducts(apolloInstance) {
  try {
    return await apolloInstance.$apollo
      .query({
        query: FETCH_ALL_PRODUCTS_QUERY,
      })
      .then(({ data }) => {
        const products = data
        return { products }
      })
  } catch (error) {
    return { remoteError: error }
  }
}
