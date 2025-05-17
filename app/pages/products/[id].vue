<script lang="ts" setup>
const productsStore = useProductsStore()
const route = useRoute('products-id')

const { data: product, status } = await useAsyncData(() => `product-${route.params.id}`, () => productsStore.getProduct(+route.params.id!), {
  transform: data => data || [],
  lazy: true,
})

definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div class="@container flex justify-center max-w-6xl mx-auto h-full items-center">
    <ProductsProductDetails v-if="status === 'success' && product" :product />
    <ProductsProductSkeleton v-else-if="status === 'pending'" />
  </div>
</template>
