<script setup lang="ts">
const filterByName = defineModel<string>('search')

const categories = ['По умолчанию', 'По категории'] as const
const filterByCategory = defineModel<typeof categories[number] | string>('category', {
  default: 'По умолчанию',
})
</script>

<template>
  <div class="flex items-center w-full gap-2">
    <UInput v-model="filterByName" icon="i-lucide-search" placeholder="Найти товары..." class="w-full" />
    <USelect v-model="filterByCategory" :items="categories as unknown as string[]" class="w-fit" />
  </div>
</template>
