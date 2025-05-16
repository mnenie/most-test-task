export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie('token')
  if (token.value && to.name === 'login') {
    return navigateTo({
      name: 'index',
    })
  }
})
