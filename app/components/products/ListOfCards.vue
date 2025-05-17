<script setup lang="ts">
import type { AsyncDataRequestStatus } from '#app'
import type { Product } from '~/types/product'

defineProps<{
  products: Omit<Product, 'description'>[]
  status?: AsyncDataRequestStatus
}>()
</script>

<template>
  <div class="grid @sm:grid-cols-2 @lg:grid-cols-3 gap-4 w-full">
    <template v-if="products.length">
      <ProductsProductCard
        v-for="product in products"
        :key="product.id"
        :product
        class="w-full"
      />
    </template>
    <template v-if="status === 'pending'">
      <USkeleton v-for="i in 6" :key="i" class="h-64 rounded-lg" />
    </template>
    <p v-else-if="status === 'success' && !products.length" class="text-center">
      Ничего не нашлось
    </p>
  </div>
</template>
