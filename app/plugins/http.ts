export default defineNuxtPlugin(() => {
  const token = useCookie('token')
  const api = $fetch.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
    headers: {
      'Content-Type': 'application/json',
    },
    onRequest({ options }) {
      if (!token.value) return
      options.headers.set('Authorization', `Bearer ${token.value}`)
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        // тут fake store api возвращает и access_token и refresh_token и ну обычно refresh_token нужно чтобы приходил в httponly
        // в тестовом вы не просили это но в целом при таком подходе потом врапим в try, catch и если все ок то вместе credentials: 'include' мы пускаем его в body
      }
    },
  })
  return {
    provide: {
      api,
    },
  }
})
