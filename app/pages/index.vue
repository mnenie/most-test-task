<script lang="ts" setup>
const filterByName = ref('')
const filterByCategory = shallowRef()

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const productsStore = useProductsStore()

const { data: products, error, status } = await useAsyncData('products', async () => {
  await delay(1000)
  return productsStore.getProducts()
}, {
  transform: data => data || [],
  server: false, lazy: true,
})

const { filteredProducts } = useFilterProducts(filterByName, filterByCategory, products)

definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div class="@container h-full max-w-4xl mx-auto flex flex-col pt-28 px-4">
    <div class="flex items-center w-full gap-2 mb-4">
      <ProductsFiltersForList v-model:category="filterByCategory" v-model:search="filterByName" />
      <UButton
        v-if="user"
        label="Выйти"
        class="ml-auto w-fit"
        @click="authStore.logout()"
      />
    </div>
    <p v-if="error" class="text-center text-red-500">
      Товаров не найдено в связи с ошибкой
    </p>
    <ProductsListOfCards v-else-if="status === 'success'" :products="filteredProducts" :status />
    <ProductsListSkeleton v-else-if="status === 'pending'" />
  </div>
</template>
