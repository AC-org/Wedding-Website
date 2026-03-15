import './Info.css';
import Navbar from '../components/Navbar';
import CountdownFooter from '../components/CountdownFooter';
import { Link } from 'react-router-dom';

function Info() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <div className="info-container">
        <div className="info-card">
          <h1 className="info-title">Praktisk Information</h1>

          <div className="info-section">
            <h2 className="info-section-title">Klädkod</h2>
            <p className="info-text">
              Vi önskar se herrarna i hel kostym eller smoking – gärna i en fin somrig ton. Damer välkomnas i eleganta klänningar, gärna med färg och känsla. Vi vill att alla ska känna sig riktigt festklädda! 🎉
            </p>
          </div>

          <div className="info-section">
            <h2 className="info-section-title">Tal, musik & surprises</h2>
            <p className="info-text">
              Vill du hålla tal, framföra något, spela musik eller hitta på något kul under middagen? Hör av dig till våra toastmasters Ebba Rovig och Sixten Roström i god tid innan bröllopet.
            </p>
            <div className="info-highlight">
              <p className="info-text" style={{ margin: 0 }}>
                <strong>Ebba Rovig & Sixten Roström</strong><br />
                Mail: <em>carparnastoastmasters@gmail.com</em>
              </p>
            </div>
          </div>

          <div className="info-section">
            <h2 className="info-section-title">Transport & Bussar</h2>
            <p className="info-text">
              Vi ordnar buss för er! Bussarna avgår från boendena, kör er till <strong>Vendels kyrka</strong> för ceremonin och sedan vidare till <strong>Orangeriet på Örbyhus slott</strong> för middagen och festen.
            </p>
            <p className="info-text">
              Sent på natten kör bussarna tillbaka till boendena. Exakta avgångstider kommer i inbjudan.
            </p>
            <div className="info-highlight">
              <p className="info-text" style={{ margin: 0 }}>
                Har du frågor om transport eller annat praktiskt? Kontakta vår toastmaster!
                <br /><strong>Toastmaster:</strong> Ebba Rovig och Sixten Roström: _____@gmail.com
              </p>
            </div>
          </div>

          <div className="info-section">
            <h2 className="info-section-title">Boende</h2>
            <p className="info-text">
              Vi har ordnat boende i närheten så att ni kan festa utan att oroa er för hemfärden. Information om var ni bor och hur ni bokar hittar ni på boende-sidan.
            </p>
            <Link to="/overnattning" className="info-link">
              Till boende-sidan →
            </Link>
          </div>

          <div className="info-section" style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
            <h2 className="info-section-title">Schema & Söndagen</h2>
            <p className="info-text">
              Nyfiken på hur dagen ser ut? På schema-sidan hittar ni upplägget för lördagen — från ceremoni till fest.
            </p>
            <Link to="/schema" className="info-link">
              Till schemat →
            </Link>
            <p className="info-text" style={{ marginTop: '16px' }}>
              Vi ses även på <strong>söndagen den 9 augusti</strong> i <strong>Örbyhus slottsträdgård</strong> för en avslappnad dag-efter-samling. OBS: hit bussas ni inte — ni tar er dit på egen hand. Mer info hittar ni på schema-sidan.
            </p>
          </div>
        </div>
      </div>

      <CountdownFooter />
    </div>
  );
}

export default Info;
