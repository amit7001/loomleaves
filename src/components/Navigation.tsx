import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/useAuth'
import logoImage from '../images/Logo.png'
import './Navigation.css'

function Navigation() {
  const location = useLocation()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const [scrolled, setScrolled] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20)
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  // const handleLogout = () => {
  //   logout()
  //   navigate('/')
  // }

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className={`sticky-nav-bar ${scrolled ? 'is-sticky' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>

            <li className="dropdown-container">
              <span className={`dropdown-trigger ${location.pathname.includes('/category') ? 'active' : ''}`}>
                Categories ▾
              </span>
              <div className="dropdown-menu">
                <Link to="/category/mink-blankets">Mink Blankets</Link>
                <Link to="/category/polar-blankets">Polar Blankets</Link>
                <Link to="/category/ladies-shawls">Ladies Shawls</Link>
                <Link to="/category/towels">Towels</Link>
                <Link to="/category/bedsheets">Bedsheets</Link>
                <Link to="/category/winter-world">Winter World</Link>
                <Link to="/category/hotel-supply">Hotel Supply</Link>
                <Link to="/category/gifting">Gifting</Link>
              </div>
            </li>
            <li />
            <li />
            <div className="logo-scroll-section">
              <Link to="/" className="logo">
                <img src={logoImage} alt="Loomleaves" className="logo-image" />
              </Link>
            </div>

            <li />
            <li />
            <li><Link to="/showroom" className={location.pathname === '/showroom' ? 'active' : ''}>Showroom</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            <li><Link to="/contact" className="nav-btn-highlight">Call +91 9896786599</Link></li>

            {/* {user ? (
              <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
            ) : (
              <li><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

