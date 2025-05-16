<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['with-sign-in'],
})
</script>

<template>
  <div class="@container h-full flex justify-center items-center">
    <AuthLoginForm />
  </div>
</template>
