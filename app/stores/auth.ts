import type { Raw } from 'vue'
import type { User } from '~/types/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = shallowRef<Raw<User> | null>(null)
  const token = useCookie<string>('token')

  const { loginUser, getCurrentUser: getUser } = useAuth()
  const toast = useToast()

  async function login(data: Pick<User, 'email' | 'password'>) {
    try {
      const response = await loginUser(data)
      token.value = response.access_token
      return response
    }
    catch (error: Error | any) {
      toast.add({
        title: error.message,
      })
      throw new Error(error)
    }
  }

  async function getCurrentUser() {
    try {
      const response = await getUser()
      user.value = response
      return response
    }
    catch (error: Error | any) {
      await navigateTo({
        name: 'login',
      })
      throw new Error(error)
    }
  }

  return {
    user,
    login,
    getCurrentUser,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
