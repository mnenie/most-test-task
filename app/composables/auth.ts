import { z } from 'zod'
import type { User, UserAuth } from '~/types/auth'

export function useAuth() {
  const { $api } = useNuxtApp()

  const schema = z.object({
    email: z
      .string({ required_error: 'Обязательно поле' })
      .nonempty({ message: 'Введите хотя бы один символ' })
      .email({ message: 'Некорректная почта' }),
    password: z
      .string({ required_error: 'Обязательно поле' })
      .nonempty({ message: 'Введите хотя бы один символ' })
      .min(8, {
        message: 'Пароль должен быть минимум 8 символов',
      }),
  })

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
    schema,
    loginUser,
    getCurrentUser,
  }
}
