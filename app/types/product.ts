interface Category {
  id: number
  name: string
  image?: string
}

export interface Product extends Omit<Category, 'name' | 'image'> {
  title: string
  price: number
  description: string
  category: Category
  images: string[]
}
