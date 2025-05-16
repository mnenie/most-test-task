export default defineNuxtRouteMiddleware(async () => {
  const nuxtApp = useNuxtApp()
  const token = useCookie('token')
  if (!token.value) {
    return nuxtApp.runWithContext(() => navigateTo({
      name: 'login',
    }))
  }
})
