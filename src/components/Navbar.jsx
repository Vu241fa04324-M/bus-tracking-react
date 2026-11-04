import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={closeMenu}>
        <span className="brand-icon">🚌</span>
        BusTrack
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/tracking" onClick={closeMenu}>
          Live Tracking
        </NavLink>
        <NavLink to="/routes" onClick={closeMenu}>
          Routes
        </NavLink>
        <NavLink to="/stops" onClick={closeMenu}>
          Bus Stops
        </NavLink>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <Link
          className="login-link"
          to="/login"
          onClick={closeMenu}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;