import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import { Product } from '../data/products'
import { categories } from '../data/products'
import './Page.css'

function EditProduct() {
  const { id } = useParams<{ id: string }>()
  const { getProduct, updateProduct, categories } = useProducts()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const productId = Number(id)
    if (productId) {
      const existingProduct = getProduct(productId)
      if (existingProduct) {
        setProduct(existingProduct)
      }
    }
  }, [id, getProduct])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (product) {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      })
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && product) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setProduct({
          ...product,
          image: reader.result as string,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (product) {
      updateProduct(product)
      navigate('/admin')
    }
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="page">
      <div className="page-content">
        <div className="contact-form">
          <h2>Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            {product.image && (
              <div className="form-group">
                <img src={product.image} alt="Preview" style={{ maxWidth: '200px' }} />
              </div>
            )}
            <div className="form-actions">
              <button type="submit" className="submit-button">
                Update Product
              </button>
              <button type="button" onClick={() => navigate('/admin')} className="cancel-button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProduct
