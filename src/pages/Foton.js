import React from 'react';
import './Foton.css';
import Navbar from '../components/Navbar';
import CountdownFooter from '../components/CountdownFooter';
import WeddingChatBot from '../components/WeddingChatBot/WeddingChatBot';

function Foton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <div className="foton-container">
        <div className="foton-card">
          <h1 className="foton-title">Foton från bröllopet</h1>
          <p className="foton-subtitle">Dela era minnen från vår stora dag</p>

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

      <CountdownFooter />
      <WeddingChatBot />
    </div>
  );
}

export default Foton;
