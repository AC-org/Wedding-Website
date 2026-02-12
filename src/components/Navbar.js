import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/"> Hem </Link></li>
        {/* <li><Link to="/info"> Info </Link></li> */}
        <li><Link to="/hitta-hit">Hitta hit</Link></li>
        <li><Link to="/schema">Schema</Link></li>
        <li><Link to="/rsvp">OSA</Link></li>
        <li><Link to="/foton">Foton</Link></li>
        <li><Link to="/overnattning">Övernattning</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
