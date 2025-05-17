import type { Raw } from 'vue'
import type { Product } from '~/types/product'

export const useProductsStore = defineStore('products', () => {
  const products = shallowRef<Raw<Omit<Product, 'description'>[]>>([])
  const product = shallowRef<Raw<Product> | null>(null)

  const { getAllProducts } = useProducts()
  const toast = useToast()

  async function getProducts() {
    try {
      const response = await getAllProducts()
      products.value = response
      return response
    }
    catch (error: Error | any) {
      toast.add({
        title: error.message,
      })
      throw new Error(error)
    }
  }

  return {
    products,
    getProducts,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
