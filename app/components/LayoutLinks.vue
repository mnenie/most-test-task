<script setup lang="ts">
import { links } from '~/constants/links'
</script>

<template>
  <div class="fixed w-full flex gap-2 items-center justify-center pt-10">
    <NuxtLink
      v-for="{ to, title } in links"
      :key="to"
      :to
      class="text-neutral-500 hover:text-orange-500 transition-colors"
      :class="{ 'pointer-events-none opacity-50': $route.path === to }"
    >
      {{ title }}
    </NuxtLink>
    <NuxtImg loading="lazy" src="/middleware-1.png" class="absolute -bottom-16 left-[40%] w-50" />
  </div>
</template>
