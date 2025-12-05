import './Page.css'
import './About.css'
import founderImage from '../images/founder.png'

function About() {
    return (
        <div className="page about-page">
            <div className="page-content">
                <div className="about-hero">
                    <h1>Crafting Legacy in Thread</h1>
                    <p>
                        Established in the historic textile hub of Panipat, Loomleaves is more than a brand—it is a commitment to
                        weaving superior quality into the fabric of everyday life.
                    </p>
                </div>

                <section className="founder-section">
                    <div className="founder-image-container">
                        <img src={founderImage} alt="Neeraj Tayal - Founder" className="founder-image" />
                    </div>
                    <div className="founder-content">
                        <h2>Neeraj Tayal</h2>
                        <span className="founder-role">Founder & CEO</span>
                        <p className="founder-bio">
                            With a deep-rooted passion for textiles and a vision to bring Panipat's finest craftsmanship to the global stage,
                            Neeraj Tayal established Loomleaves to bridge the gap between traditional weaving excellence and modern luxury demands.
                        </p>
                        <p className="founder-bio">
                            "We believe that every thread tells a story. Our mission is to ensure that your home tells a story of elegance,
                            comfort, and enduring quality."
                        </p>
                    </div>
                </section>

                <section className="values-section">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Uncompromised Quality</h3>
                            <p>We source only the finest raw materials to ensure our products stand the test of time.</p>
                        </div>
                        <div className="value-card">
                            <h3>Panipat Heritage</h3>
                            <p>Proudly manufacturing in India's "City of Weavers", honoring generations of skill.</p>
                        </div>
                        <div className="value-card">
                            <h3>Global Standard</h3>
                            <p>Delivering export-quality luxury linens to homes and businesses worldwide.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
