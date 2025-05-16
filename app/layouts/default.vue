<script setup lang="ts">
const authStore = useAuthStore()

// я думаю если смотреть еще глубже то можно и вотчер поставить в целом на роут но я решил не заморачивать с этим ))))
onBeforeMount(() => {
  authStore.getCurrentUser()
})
</script>

<template>
  <div class="h-dvh w-full relative">
    <slot />
  </div>
</template>
