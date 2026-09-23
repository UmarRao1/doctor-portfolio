import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <span>Dr. Shaukat Ali</span>
          <small>MD, FACC</small>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>

          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>

          <NavLink
            to="/education"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Education
          </NavLink>

          <NavLink
            to="/experience"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Experience
          </NavLink>

          <NavLink
            to="/achievements"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Achievements
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </NavLink>

        </nav>

        <ThemeToggle />

      </div>
    </header>
  )
}

export default Navbar