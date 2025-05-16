<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div>
    product {{ $route.params.id }}
  </div>
</template>
