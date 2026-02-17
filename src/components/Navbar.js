import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}> Hem </Link></li>
        {/* <li><Link to="/info"> Info </Link></li> */}
        <li><Link to="/hitta-hit" onClick={handleLinkClick}>Hitta hit</Link></li>
        <li><Link to="/schema" onClick={handleLinkClick}>Schema</Link></li>
        <li><Link to="/rsvp" onClick={handleLinkClick}>OSA</Link></li>
        <li><Link to="/foton" onClick={handleLinkClick}>Foton</Link></li>
        <li><Link to="/overnattning" onClick={handleLinkClick}>Övernattning</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
