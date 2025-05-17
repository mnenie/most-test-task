export default defineNuxtRouteMiddleware(async (to) => {
  const token = useCookie('token')
  if (token.value && to.name === 'login') {
    return abortNavigation()
  }
})
