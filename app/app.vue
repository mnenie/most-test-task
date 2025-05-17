<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <UApp :toaster="appConfig.toaster">
      <NuxtLayout>
        <LayoutLinks />
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
