import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import './Page.css'

function Admin() {
  const { products, deleteProduct } = useProducts()

  return (
    <div className="page">
      <div className="page-content">
        <h1>Admin Dashboard</h1>
        <Link to="/admin/add" className="submit-button">
          Add Product
        </Link>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <div className="placeholder-image"></div>
                )}
              </div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p className="product-category">{product.category}</p>
              <div className="product-actions">
                <Link
                  to={`/admin/edit/${product.id}`}
                  className="product-button"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="product-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admin
