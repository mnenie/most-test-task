import type { Product } from '~/types/product'

export function useFilterProducts<F extends string = string>(
  filterByName: MaybeRefOrGetter<F>,
  filterByCategory: MaybeRefOrGetter<F>,
  products: MaybeRefOrGetter<Omit<Product, 'description'>[] | undefined>,
) {
  const filteredProducts = computed(() => {
    if (!toValue(products)) return []
    return [...toValue(products)!]
      .filter(product =>
        product.title.toLowerCase().includes(toValue(filterByName).toLowerCase()))
      .sort((a, b) => toValue(filterByCategory) === 'По категории'
        ? a.category.name.localeCompare(b.category.name)
        : 0)
  })

  return {
    filteredProducts,
  }
}

export function useProducts() {
  const { $api } = useNuxtApp()

  async function getAllProducts<T extends Omit<Product, 'description'>>(): Promise<T[]> {
    return $api<T[]>('/products')
  }
  async function getProductById<T extends Product>(id: number): Promise<T> {
    return $api<T>(`/products/${id}`)
  }

  return {
    getAllProducts,
    getProductById,
  }
}
