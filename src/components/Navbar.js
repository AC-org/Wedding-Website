import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const navLinks = [
  { to: '/',             label: 'Hem' },
  { to: '/schema',       label: 'Schema' },
  { to: '/info',         label: 'Info' },
  { to: '/rsvp',         label: 'OSA' },
  { to: '/hitta-hit',    label: 'Hitta hit' },
  { to: '/overnattning', label: 'Boende' },
  // { to: '/foton',        label: 'Foton' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef(null);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close on click outside drawer
  useEffect(() => {
    if (!menuOpen) return;
    function onPointerDown(e) {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar" aria-label="Huvudnavigation">
        {/* A♥A logo */}
        <Link to="/" className="navbar-logo" aria-label="Till startsidan">
          <span className="logo-a">A</span>
          <span className="logo-heart" aria-hidden="true">{"♥\uFE0E"}</span>
          <span className="logo-a">A</span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar-desktop-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger – mobile only */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={menuOpen}
          aria-controls="nav-drawer"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`drawer-backdrop${menuOpen ? ' visible' : ''}`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-in drawer */}
      <nav
        id="nav-drawer"
        ref={drawerRef}
        className={`nav-drawer${menuOpen ? ' open' : ''}`}
        aria-label="Mobil navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="drawer-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="drawer-footer">A {"♥\uFE0E"} A &nbsp;·&nbsp; 8 aug 2026</p>
      </nav>
    </>
  );
}

export default Navbar;
