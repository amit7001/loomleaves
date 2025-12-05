import { useParams, Link, useNavigate } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import './Page.css'

function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { getProduct } = useProducts()
  const product = getProduct(Number(id))

  if (!product) {
    return (
      <div className="page">
        <div className="page-content">
          <h1>Product Not Found</h1>
          <p className="lead">The product you're looking for doesn't exist.</p>
          <Link to="/product" className="back-button">Back to Products</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page-content">
        <button onClick={() => navigate(-1)} className="back-button">← Back</button>

        <div className="product-detail-container glass-panel">
          <div className="product-detail-image">
            <div className="product-image-large">
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div className="placeholder-image">{product.name.charAt(0)}</div>
              )}
            </div>
          </div>

          <div className="product-detail-info">
            <div className="product-category-badge">{product.category}</div>
            <h1>{product.name}</h1>
            <div className="product-rating">
              <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
              <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="product-price-large">{product.price}</div>
            <p className="product-full-description">{product.fullDescription}</p>

            <div className="product-specifications">
              <div className="spec-item">
                <h3>Material</h3>
                <p>{product.material}</p>
              </div>

              <div className="spec-item">
                <h3>Available Sizes</h3>
                <div className="size-options">
                  {product.size.map((size) => (
                    <button key={size} className="size-button">{size}</button>
                  ))}
                </div>
              </div>

              <div className="spec-item">
                <h3>Available Colors</h3>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <div key={color} className="color-option">
                      <div className="color-swatch" style={{ backgroundColor: getColorHex(color) }}></div>
                      <span>{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="spec-item">
                <h3>Stock Status</h3>
                <p className={product.inStock ? 'in-stock' : 'out-of-stock'}>
                  {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </p>
              </div>
            </div>

            <div className="product-actions">
              <button className="add-to-cart-button" disabled={!product.inStock}>
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button className="wishlist-button">♡ Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getColorHex(color: string): string {
  const colorMap: { [key: string]: string } = {
    'White': '#FFFFFF',
    'Black': '#000000',
    'Navy': '#001f3f',
    'Red': '#FF0000',
    'Blue': '#0074D9',
    'Green': '#2ECC40',
    'Yellow': '#FFDC00',
    'Pink': '#FF69B4',
    'Purple': '#B10DC9',
    'Gray': '#808080',
    'Brown': '#8B4513',
    'Beige': '#F5F5DC',
    'Ivory': '#FFFFF0',
    'Gold': '#FFD700',
    'Silver': '#C0C0C0',
    'Burgundy': '#800020',
    'Emerald': '#50C878',
    'Olive': '#808000',
    'Khaki': '#C3B091',
    'Cream': '#FFFDD0',
    'Natural': '#F5E6D3',
    'Light Blue': '#ADD8E6'
  }
  return colorMap[color] || '#CCCCCC'
}

export default ProductDetail

