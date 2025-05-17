import type { User, UserAuth } from '~/types/auth'

export function useAuth() {
  const { $api } = useNuxtApp()

  async function loginUser<T extends UserAuth>(data: Pick<UserAuth, 'email' | 'password'>): Promise<T> {
    return $api<T>('/auth/login', {
      method: 'POST',
      body: data,
    })
  }
  async function getCurrentUser<T extends User>(): Promise<T> {
    return $api<T>('/auth/profile')
  }

  return {
    loginUser,
    getCurrentUser,
  }
}
