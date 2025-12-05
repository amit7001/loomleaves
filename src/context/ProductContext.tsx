import { createContext, useState, ReactNode, useContext } from 'react'
import {
  products as initialProducts,
  Product,
  categories as initialCategories,
  Category,
} from '../data/products'

interface ProductContextType {
  products: Product[]
  addProduct: (product: Product) => void
  updateProduct: (product: Product) => void
  deleteProduct: (id: number) => void
  getProduct: (id: number) => Product | undefined
  categories: Category[]
  addCategory: (category: Category) => void
  updateCategory: (category: Category) => void
  deleteCategory: (id: number) => void
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  addProduct: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
  getProduct: () => undefined,
  categories: [],
  addCategory: () => {},
  updateCategory: () => {},
  deleteCategory: () => {},
})

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [categories, setCategories] = useState<Category[]>(initialCategories)

  const addProduct = (product: Product) => {
    setProducts([
      ...products,
      { ...product, id: Date.now(), image: product.image || '' },
    ])
  }

  const updateProduct = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    )
  }

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const getProduct = (id: number) => {
    return products.find((product) => product.id === id)
  }

  const addCategory = (category: Category) => {
    setCategories([...categories, { ...category, id: Date.now() }])
  }

  const updateCategory = (updatedCategory: Category) => {
    setCategories(
      categories.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    )
  }

  const deleteCategory = (id: number) => {
    setCategories(categories.filter((category) => category.id !== id))
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getProduct,
        categories,
        addCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  return useContext(ProductContext)
}
