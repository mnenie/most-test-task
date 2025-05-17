<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { schema } from '~/schemas/auth'

const formSchema = toTypedSchema(
  schema,
)
const { handleSubmit, errors } = useForm({
  validationSchema: formSchema,
})

const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')

const authStore = useAuthStore()

// вот честно - был бы выбор в тестовом что можно имспользовать какую то pinia-colada то лучше через нее я думаю
// просто сделал через useAsyncData чтоб не плодить pending, error и тд в сторах
// в pinia нельзя вытянуть из useAsyncData из за соображений жизненного цикла и ssr
const { pending, refresh, error } = await useAsyncData('auth-login', () => authStore.login({
  email: 'john@mail.com',
  password: 'changeme',
}), { immediate: false })

const onFormSubmitted = handleSubmit(async () => {
  await refresh()
  if (error.value) return
  await navigateTo({ name: 'index' })
})
</script>

<template>
  <form class="max-w-2xl @max-md:px-4" @submit.prevent="onFormSubmitted">
    <div class="grid gap-6">
      <p class="text-lg font-semibold mb-2">
        Войдите в свою учетную запись
      </p>
      <div class="grid gap-4">
        <UFormField v-auto-animate label="Почта" :error="errors.email" required>
          <UInput v-model="email" class="w-full" placeholder="Введите вашу почту" />
        </UFormField>
        <UFormField v-auto-animate label="Пароль" :error="errors.password" required>
          <UInput v-model="password" class="w-full" placeholder="Введите пароль от аккаунта" />
        </UFormField>
      </div>
      <AuthPolicy />
      <UButton label="Войти" :loading="pending" type="submit" class="w-full justify-center" />
    </div>
  </form>
</template>
