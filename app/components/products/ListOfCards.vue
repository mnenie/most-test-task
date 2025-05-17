<script setup lang="ts">
import type { AsyncDataRequestStatus } from '#app'
import type { Product } from '~/types/product'

defineProps<{
  products: Omit<Product, 'description'>[]
  status?: AsyncDataRequestStatus
}>()
</script>

<template>
  <div class="grid @md:grid-cols-2 @xl:grid-cols-3 gap-4 w-full">
    <template v-if="products.length">
      <ProductsProductCard
        v-for="product in products"
        :key="product.id"
        :product
        class="w-full"
      />
    </template>
    <p v-else-if="status === 'success' && !products.length" class="text-center">
      Ничего не нашлось
    </p>
  </div>
</template>
