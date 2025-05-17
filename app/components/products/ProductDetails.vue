<script setup lang="ts">
import type { Product } from '~/types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="w-full mx-auto flex items-start gap-5 @xl:flex-row flex-col px-4">
    <NuxtImg loading="lazy" :src="product.category.image" class="@xl:w-64 w-full h-64 object-cover rounded-lg" />
    <div class="flex flex-col flex-grow gap-2">
      <h2 class="text-lg font-bold">
        {{ product.title }}
      </h2>
      <p class="text-lg mt-auto text-muted mb-2 line-clamp-3">
        {{ product.description }}
      </p>
      <span class="text-lg">
        Цена: ${{ product.price }}
      </span>
      <span class="text-lg">
        Категория: {{ product.category.name }}
      </span>
    </div>
  </div>
</template>
