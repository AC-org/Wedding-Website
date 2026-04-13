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
            <h2 className="info-section-title">OSA</h2>
            <p className="info-text">
              Läs gärna igenom denna hemsida noggrant för att ta del av all information inför bröllopet, och tveka inte att höra av dig om du har några frågor!
            OSA även via formuläret på sidan "OSA" så snart som möjligt, dock senast <strong>1 juni 2026</strong>.
            </p>
            <Link to="/rsvp" className="info-link">
              Till OSA →
            </Link>
          </div>
          
          <div className="info-section">
            <h2 className="info-section-title">Klädkod</h2>
            <p className="info-text">
              Vi önskar att våra gäster klär sig i <strong>mörk kostym</strong>. För herrar innebär det en mörk kostym (till exempel mörkblå, mörkgrön, mörkgrå) med skjorta och slips eller fluga. Damer väljer med fördel en klänning eller ett matchande set i valfri färg.
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
                Mail: <em>arthuramanda.toastmasters@gmail.com</em>
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
              På söndagen kommer det ej köras bussar, så ni tar er till <strong>Orangeriet på Örbyhus slott</strong> på egen hand. Det finns parkeringsmöjligheter nära Orangerietför den som kör bil. Se mer om schema längre ner.
            </p>
          </div>

          <div className="info-section">
            <h2 className="info-section-title">Boende</h2>
            <p className="info-text">
              Vi har ordnat boende i närheten så att vi kan fira utan att oroas för hemfärden. Information om var ni bor och hur detta bokas hittar ni på boende-sidan.
            </p>
            <Link to="/overnattning" className="info-link">
              Till boendet →
            </Link>
          </div>

          <div className="info-section">
            <h2 className="info-section-title">Gåvor</h2>
            <p className="info-text">
              Om ni vill ge oss något är vi otroligt tacksamma för bidrag till vår bröllopsresa. Vi ska nämligen till Japan på smekmånad!
            </p>
            <p className="info-text">
              Skulle ni vilja ge något annat, kontakta gärna <em>arthuramanda.toastmasters@gmail.com</em>.
            </p>
          </div>

          <div className="info-section" style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
            <h2 className="info-section-title">Schema</h2>
            <p className="info-text">
              Nyfiken på hur dagarna kommer se ut? På schema-sidan hittar ni upplägget för både lördagen och söndagen!
            </p>
            <Link to="/schema" className="info-link">
              Till schemat →
            </Link>
          </div>
        </div>
      </div>

      <CountdownFooter />
      <WeddingChatBot />
    </div>
  );
}

export default Info;
