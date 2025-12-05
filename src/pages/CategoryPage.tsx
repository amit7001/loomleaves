import { useParams } from 'react-router-dom'
import { categoryDetails, products } from '../data/products'
import { Link } from 'react-router-dom'
import './Page.css'

function CategoryPage() {
    const { category: slug } = useParams<{ category: string }>()

    // Find the category detail that matches the slug (id)
    const categoryKey = Object.keys(categoryDetails).find(
        key => categoryDetails[key].id === slug
    )

    const category = categoryKey ? categoryDetails[categoryKey] : null

    if (!category) {
        return (
            <div className="page">
                <div className="page-content">
                    <div className="container">
                        <h1>Category Not Found</h1>
                        <Link to="/" className="btn-primary">Return Home</Link>
                    </div>
                </div>
            </div>
        )
    }

    // Filter products for this category
    const categoryProducts = products.filter(p => p.category === categoryKey)

    return (
        <div className="page">
            <div className="page-content">
                {/* Hero Section */}
                <div className="glass-panel" style={{ marginBottom: '2rem', padding: '3rem 2rem' }}>
                    {category.image && (
                        <div style={{
                            width: '100%',
                            height: '300px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            marginBottom: '2rem'
                        }}>
                            <img
                                src={category.image}
                                alt={category.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    )}
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>{category.title}</h1>
                    <p className="lead" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>{category.description}</p>
                </div>

                {/* Key Features & Use Cases Grid */}
                <div className="features-grid" style={{ marginBottom: '3rem' }}>
                    <div className="glass-panel">
                        <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>Key Features</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {category.keyFeatures.map((feature, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--color-accent-pink)' }}>•</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-panel">
                        <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>Use Cases</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {category.useCases.map((useCase, index) => (
                                <span key={index} style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.9rem'
                                }}>
                                    {useCase}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="glass-panel">
                        <h3 style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>Market Info</h3>
                        <p><strong>Price Range:</strong> {category.priceRange}</p>
                        <p><strong>Customization:</strong> {category.customization}</p>
                        <div style={{ marginTop: '1rem' }}>
                            {category.searchTags.map((tag, index) => (
                                <span key={index} style={{
                                    color: 'var(--color-text-secondary)',
                                    fontSize: '0.8rem',
                                    marginRight: '0.5rem'
                                }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                {/* <h2 style={{ marginBottom: '1.5rem' }}>Available Products</h2>
                {categoryProducts.length > 0 ? (
                    <div className="product-grid">
                        {categoryProducts.map((product) => (
                            <div key={product.id} className="product-card glass-panel">
                                <div className="product-image-placeholder">
                                    {product.image ? (
                                        <img src={product.image} alt={product.name} />
                                    ) : (
                                        <div className="placeholder-text">{product.name}</div>
                                    )}
                                </div>
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p className="price">{product.price}</p>
                                    <p className="description">{product.description}</p>
                                    <Link to={`/product/${product.id}`} className="btn-outline">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem' }}>
                        <p>New collections arriving soon for this category.</p>
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default CategoryPage
