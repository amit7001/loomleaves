import { Link } from 'react-router-dom'
import './Home.css' // Import the unified light luxury theme styles

function Home() {
  return (
    <div className="home-page">
      {/* Editorial Hero Section */}
      <section className="luxury-hero">
        <h1 className="hero-headline">
          The Art of <br />
          <span>Finer Living</span>
        </h1>
        <p className="hero-subtext">
          Loomleaves brings you an exquisite collection of luxury bed and bath linens.
          Designed for comfort, crafted for longevity, and styled for the modern home.
        </p>
      </section>

      {/* Staggered Grid Presentation */}
      <section className="luxury-grid">
        <div className="grid-item">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
            alt="Soft Wool Texture"
            className="grid-image"
          />
          <div className="grid-content">
            <h3>The Winter Edit</h3>
            <p>Plush Velvet & Heavyweight Mink</p>
          </div>
        </div>
        <div className="grid-item">
          <img
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
            alt="Crisp White Bedding"
            className="grid-image"
          />
          <div className="grid-content">
            <h3>Hotel Collection</h3>
            <p>Crisp Percale & Satin Stripes</p>
          </div>
        </div>
        <div className="grid-item">
          <img
            src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
            alt="Stacked Cotton Towels"
            className="grid-image"
          />
          <div className="grid-content">
            <h3>Spa Essentials</h3>
            <p>100% Cotton High-Absorbency</p>
          </div>
        </div>
      </section>

      {/* Quick Category Access */}
      <section className="category-strip">
        <h2>Explore Our Range</h2>
        <div className="cat-list">
          <Link to="/category/mink-blankets" className="cat-pill">Mink Blankets</Link>
          <Link to="/category/polar-blankets" className="cat-pill">Polar Blankets</Link>
          <Link to="/category/bedsheets" className="cat-pill">Bedsheets</Link>
          <Link to="/category/towels" className="cat-pill">Towels</Link>
          <Link to="/category/hotel-supply" className="cat-pill">Hotel Supply</Link>
          <Link to="/category/gifting" className="cat-pill">Gifting</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
