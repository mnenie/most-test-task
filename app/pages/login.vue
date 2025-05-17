<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: ['with-sign-in'],
})
</script>

<template>
  <div class="@container flex justify-center h-full items-center">
    <AuthLoginForm />
  </div>
</template>
