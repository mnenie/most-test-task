<script setup lang="ts">
import type { Product } from '~/types/product'

defineProps<{
  product: Omit<Product, 'description'>
}>()
</script>

<template>
  <div class="flex flex-col max-w-sm w-full bg-white rounded-lg shadow-md cursor-pointer">
    <NuxtImg v-if="product.images.length" loading="lazy" :src="product.category.image" class="w-full h-48 object-cover rounded-lg rounded-b-none" />
    <div class="flex flex-col p-3 flex-grow">
      <h2 class="text-lg font-bold mb-2">
        {{ product.title }}
      </h2>
      <p class="text-lg font-bold mt-auto">
        ${{ product.price }}
      </p>
    </div>
  </div>
</template>
