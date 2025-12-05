import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { UserProvider as AuthProvider } from './context/UserContext'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Showroom from './pages/Showroom'
import About from './pages/About'
import CategoryPage from './pages/CategoryPage'
import Login from './components/Login'
import Footer from './components/Footer'
import './App.css'
// Assuming other pages exist like Product, but focusing on core Nav now.

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/login" element={<Login />} />

            {/* Catch all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
