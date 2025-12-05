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
                        src="https://lh3.googleusercontent.com/p/AF1QipOW4GUB0padd8UkHFVyhcvNXn5dn1Y5n6_afp0=w1600-h1200"
                        alt="Loomleaves Showroom Exterior"
                        className="gallery-image"
                    />
                </div>
                <div className="gallery-item">
                    <img
                        src="https://lh3.googleusercontent.com/p/AF1QipP9aiWd-E2YnMJaovy135fZ4MdqYrvX_kQJZ8U=w1600-h1200"
                        alt="Premium Fabrics Display"
                        className="gallery-image"
                    />
                </div>
                <div className="gallery-item">
                    <img
                        src="https://lh3.googleusercontent.com/p/AF1QipNN8pZk90JuuAfrIInd7X4w5NzyyJXscI4p29g=w1600-h1200"
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
