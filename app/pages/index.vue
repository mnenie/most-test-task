<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
})

const authStore = useAuthStore()
</script>

<template>
  <div>
    {{ authStore.user }}
  </div>
</template>
