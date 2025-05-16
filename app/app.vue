<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp :toaster="appConfig.toaster">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
