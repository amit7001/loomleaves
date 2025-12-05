import './Page.css'
import './Showroom.css'
import { Link } from 'react-router-dom'

function Showroom() {
    return (
        <div className="page showroom-page">
            <div className="showroom-hero">
                <h1>Experience Luxury In Person</h1>
                <p>
                    Step into a world of texture and color. Our Panipat showroom offers a tactile experience
                    where you can feel the quality of our premium linens and expert craftsmanship firsthand.
                </p>
            </div>

            <div className="showroom-gallery">
                <div className="gallery-item wide">
                    <img
                        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80"
                        alt="Loomleaves Showroom Interior"
                        className="gallery-image"
                    />
                </div>
                <div className="gallery-item">
                    <img
                        src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80"
                        alt="Premium Fabrics Display"
                        className="gallery-image"
                    />
                </div>
                <div className="gallery-item">
                    <img
                        src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=800&q=80"
                        alt="Bedding Collections"
                        className="gallery-image"
                    />
                </div>
            </div>

            <div className="visit-banner">
                <h2>Visit Us Today</h2>
                <p style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
                    Located at Gohana Chowk, Panipat. Open Monday through Saturday.
                    Come discover the perfect textiles for your home or business.
                </p>
                <Link to="/contact" className="btn-visit">
                    Get Directions
                </Link>
            </div>
        </div>
    )
}

export default Showroom
