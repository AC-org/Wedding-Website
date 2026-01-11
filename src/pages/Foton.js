import React from 'react';
import './Foton.css';
import { Link } from 'react-router-dom';

function Foton() {
  const mockPhotos = [
    { id: 1, title: 'Ceremoni', description: 'Vackra stunder från kyrkan' },
    { id: 2, title: 'Bröllopsfest', description: 'Fest och dans på Orangeriet' },
    { id: 3, title: 'Middagen', description: 'Vår första middag tillsammans' },
    { id: 4, title: 'Glada gäster', description: 'Minnen med familj och vänner' },
    { id: 5, title: 'Bröllopskaka', description: 'Den ljuvliga kakan' },
    { id: 6, title: 'Solnedgång', description: 'Magisk stund på kvällen' },
  ];

  return (
    <div className="foton-container">
      {/* Navigation Menu */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/rsvp">OSA</Link></li>
          <li><Link to="/hitta-hit">Hitta hit</Link></li>
          <li><Link to="/schema">Schema</Link></li>
          <li><Link to="/foton">Foton</Link></li>
        </ul>
      </nav>

      <div className="foton-card">
        <h1 className="foton-title">Foton från bröllopet</h1>
        <p className="foton-subtitle">Dela era minnen från vår stora dag</p>

        {/* Upload Instructions */}
        <div className="foton-instructions">
          <h2>Hur delar du dina foton?</h2>
          <div className="instructions-grid">
            <div className="instruction-item">
              <div className="instruction-number">1</div>
              <h3>Öppna mappen</h3>
              <p>Klicka på länken nedan för att öppna vår gemensamma Google Drive-mapp</p>
            </div>
            <div className="instruction-item">
              <div className="instruction-number">2</div>
              <h3>Ladda upp foton</h3>
              <p>Klicka på "Ny" och sedan "Filuppladdning" för att välja dina bilder eller videos</p>
            </div>
            <div className="instruction-item">
              <div className="instruction-number">3</div>
              <h3>Dela med vänner</h3>
              <p>Alla dina foton blir automatiskt synliga för oss och övriga gäster</p>
            </div>
          </div>

          <div className="drive-link-container">
            <p className="drive-link-text">Klicka här för att öppna Google Drive-mappen:</p>
            <a
              href="https://drive.google.com/drive/folders/1234567890abcdefghijk?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="drive-link-button"
            >
              📁 Öppna Google Drive-mappen
            </a>
          </div>

          
        </div>


        {/* Important Info */}
        <div className="foton-info">
          <h3>Viktigt att veta</h3>
          <ul>
            <li>
              <strong>Tillgänglighet:</strong> Mappen är delad med alla bröllopsgäster som fick länken.
            </li>
            <li>
              <strong>Integritet:</strong> Vi är bara vi själva och gästerna som kan se bilderna. Ingen kan se mappen utan länken.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Foton;
