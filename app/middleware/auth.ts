export default defineNuxtRouteMiddleware(async () => {
  const nuxtApp = useNuxtApp()
  const token = useCookie('token')
  if (!token.value) {
    return navigateTo({
      name: 'login',
    })
  }
})
