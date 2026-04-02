import './Info.css';
import Navbar from '../components/Navbar';
import CountdownFooter from '../components/CountdownFooter';
import { Link } from 'react-router-dom';
import WeddingChatBot from '../components/WeddingChatBot/WeddingChatBot';
import VideoBackground from '../components/VideoBackground';

function Info() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <VideoBackground />
      <Navbar />

      <div className="info-container">
        <div className="info-card">
          <h1 className="info-title">Praktisk Information</h1>

          <div className="info-section">
            <h2 className="info-section-title">Klädkod</h2>
            <p className="info-text">
              Vi önskar att ni klär er fint för dagen. Herrar i mörk kostym eller smoking, och damer i fin klänning eller annan festklädsel. Eftersom vi firar i sommaren är det varmt välkommet att ta in lite av årstiden i outfiten. Glada färger och somriga toner hyllas!
            </p>
          </div>

          <div className="info-section">
            <h2 className="info-section-title">Tal, musik & annat</h2>
            <p className="info-text">
              Vill du hålla tal, framföra något, spela musik eller hitta på något kul under middagen? Hör av dig till våra toastmasters Ebba Rovig och Sixten Roström i god tid innan bröllopet. De hjälper till att koordinera och se till att allt flyter på under kvällen!
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
              Vi ordnar buss för er. Bussarna avgår från boendena, kör er till <strong>Vendels kyrka</strong> för ceremonin och sedan vidare till <strong>Orangeriet på Örbyhus slott</strong> för middagen och festen.
            </p>
            <p className="info-text">
              Sent på natten kör bussarna tillbaka till boendena.
            </p>
            <p className="info-text">
              På söndagen kommer det ej köras bussar, så ni tar er till <strong>Örbyhus slottsträdgård</strong> på egen hand. Det finns parkeringsmöjligheter nära Orangerietför den som kör bil.
            </p>
          </div>

          <div className="info-section">
            <h2 className="info-section-title">Boende</h2>
            <p className="info-text">
              Vi har ordnat boende i närheten så att vi kan festa utan att oroas för hemfärden. Information om var ni bor och hur detta bokas hittar ni på boende-sidan.
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
      <WeddingChatBot />
    </div>
  );
}

export default Info;
