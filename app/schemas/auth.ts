import { z } from 'zod'

export const schema = z.object({
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
