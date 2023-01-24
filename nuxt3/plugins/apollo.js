export default defineNuxtPlugin((nuxtApp) => {
  const { wooToken } = useRuntimeConfig()
  const { getToken } = useApollo()
  const mytoken = getToken()
  // Get all request headers
  const headers = useRequestHeaders(['woocommerce-session'])
  nuxtApp.hook('apollo:auth', ({ client, token }) => {
    // `client` can be used to differentiate logic on a per-client basis.

    console.log('Token: ', token)
    console.log('My Token: ', mytoken)
    // console.log('wooToken: ', wooToken)

    console.log('woo headers: ', headers)

    // apply apollo client token
    // token.value = githubToken;
  })
})
