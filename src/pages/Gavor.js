import './Gavor.css';
import Navbar from '../components/Navbar';
import CountdownFooter from '../components/CountdownFooter';
import WeddingChatBot from '../components/WeddingChatBot/WeddingChatBot';
import VideoBackground from '../components/VideoBackground';

function SakuraFlower({ className = '' }) {
  return (
    <svg
      className={`sakura-svg ${className}`}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(30,30)">
        <ellipse rx="7" ry="14" fill="#e8a4b0" opacity="0.78" />
        <ellipse rx="7" ry="14" fill="#e8a4b0" opacity="0.78" transform="rotate(72)" />
        <ellipse rx="7" ry="14" fill="#e8a4b0" opacity="0.78" transform="rotate(144)" />
        <ellipse rx="7" ry="14" fill="#e8a4b0" opacity="0.78" transform="rotate(216)" />
        <ellipse rx="7" ry="14" fill="#e8a4b0" opacity="0.78" transform="rotate(288)" />
        <circle r="4" fill="#fff" opacity="0.9" />
        <circle r="4" fill="none" stroke="#d4849a" strokeWidth="1" />
      </g>
    </svg>
  );
}

function ToriiGate() {
  return (
    <svg
      className="gavor-torii-svg"
      viewBox="0 0 160 130"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Curved top beam (kasagi) */}
      <path d="M5,30 Q80,8 155,30" stroke="#b5353e" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Top beam cap line */}
      <line x1="0" y1="30" x2="160" y2="30" stroke="#b5353e" strokeWidth="3.5" />
      {/* Second beam (nuki) */}
      <line x1="18" y1="50" x2="142" y2="50" stroke="#b5353e" strokeWidth="5.5" strokeLinecap="round" />
      {/* Left pillar */}
      <line x1="30" y1="30" x2="30" y2="130" stroke="#b5353e" strokeWidth="10" strokeLinecap="round" />
      {/* Right pillar */}
      <line x1="130" y1="30" x2="130" y2="130" stroke="#b5353e" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

function FujiSilhouette() {
  return (
    <svg
      className="fuji-svg"
      viewBox="0 0 440 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M30,110 L175,28 L200,46 L220,16 L240,46 L265,28 L410,110 Z" fill="rgba(111,78,55,0.11)" />
      {/* Snow cap */}
      <path d="M204,42 L220,16 L236,42 L228,37 L220,26 L212,37 Z" fill="rgba(255,255,255,0.55)" />
      {/* Mist clouds */}
      <ellipse cx="90" cy="88" rx="65" ry="14" fill="rgba(255,255,255,0.16)" />
      <ellipse cx="340" cy="83" rx="75" ry="15" fill="rgba(255,255,255,0.16)" />
    </svg>
  );
}

function Gavor() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <VideoBackground />
      <Navbar />

      <div className="gavor-container">
        <div className="gavor-content">

          {/* ── Hero ─────────────────────────────────── */}
          <div className="gavor-hero">
            <ToriiGate />
            <p className="gavor-kana" aria-hidden="true">贈り物</p>
            <h1 className="gavor-title">Gåvor</h1>
            <p className="gavor-subtitle">En resa till landet vi alltid drömt om</p>
            <div className="gavor-sakura-row" aria-hidden="true">
              <SakuraFlower />
              <SakuraFlower className="sakura-lg" />
              <SakuraFlower />
            </div>
          </div>

          {/* ── Main message ─────────────────────────── */}
          <div className="gavor-card gavor-main-card">
            <span className="gavor-corner-deco gavor-corner-tl" aria-hidden="true" />
            <span className="gavor-corner-deco gavor-corner-tr" aria-hidden="true" />
            <h2 className="gavor-card-heading">Japan kallar</h2>
            <p className="gavor-card-text">
              Japan har länge haft en alldeles speciell plats i våra hjärtan – ett land av tystnad och
              skönhet, av urgamla tempel och blommande körsbärsträd, av tradition som möter det moderna.
              Att få uppleva allt detta tillsammans, som nygifta, är en dröm vi länge burit med oss.
            </p>
            <p className="gavor-card-text">
              Om ni vill hedra oss med en gåva är det finaste ni kan ge ett bidrag till vår bröllopsresa.
              Stort som smått – varje gåva bär med sig en omtanke vi kommer att bära med oss länge
              efter att sista torii-porten är passerad.
            </p>
            <p className="gavor-card-text">
              Vi är djupt tacksamma för att ni är en del av vår stora dag. Er närvaro och kärlek är
              redan det allra vackraste vi kan önska oss.
            </p>
            <div className="gavor-fuji-wrap" aria-hidden="true">
              <FujiSilhouette />
            </div>
          </div>

          {/* ── How to contribute ────────────────────── */}
          <div className="gavor-card gavor-swish-card">
            <h2 className="gavor-card-heading">Bidra till Japan-resan</h2>
            <p className="gavor-card-intro">
              Bidrag tas emot med öppna armar via:
            </p>
            <div className="gavor-payment-grid">
              <div className="gavor-payment-item">
                <span className="gavor-payment-label">Swish</span>
                <span className="gavor-payment-value">070 000 00 00</span>
                <span className="gavor-payment-note">Märk gärna med ditt namn</span>
              </div>
              <div className="gavor-payment-sep" aria-hidden="true">
                <span />
                <SakuraFlower className="sakura-sm" />
                <span />
              </div>
              <div className="gavor-payment-item">
                <span className="gavor-payment-label">Bankgiro</span>
                <span className="gavor-payment-value">000-0000</span>
                <span className="gavor-payment-note">Märk gärna med ditt namn</span>
              </div>
            </div>
          </div>

          {/* ── Physical gifts ────────────────────────── */}
          <div className="gavor-card gavor-parents-card">
            <h2 className="gavor-card-heading">Föredrar du något handgripligt?</h2>
            <p className="gavor-card-text">
              Om du hellre vill ge oss något konkret är du varmt välkommen att höra av dig till
              våra föräldrar – de hjälper gärna till med idéer och koordination.
            </p>
            <div className="gavor-parents-grid">
              <div className="gavor-parent-item">
                <span className="gavor-parent-name">Arthurs föräldrar</span>
                <a
                  href="mailto:arthurs.foraldrar@example.com"
                  className="gavor-parent-email"
                >
                  arthurs.foraldrar@example.com
                </a>
              </div>
              <div className="gavor-parents-divider" aria-hidden="true" />
              <div className="gavor-parent-item">
                <span className="gavor-parent-name">Amandas föräldrar</span>
                <a
                  href="mailto:amandas.foraldrar@example.com"
                  className="gavor-parent-email"
                >
                  amandas.foraldrar@example.com
                </a>
              </div>
            </div>
          </div>

          {/* ── Closing ──────────────────────────────── */}
          <div className="gavor-closing">
            <div className="gavor-sakura-row gavor-sakura-row--closing" aria-hidden="true">
              <SakuraFlower />
              <SakuraFlower className="sakura-lg" />
              <SakuraFlower />
              <SakuraFlower className="sakura-lg" />
              <SakuraFlower />
            </div>
            <p className="gavor-closing-text">
              Tack för er kärlek och generositet.<br />
              Vi ses snart under körsbärsträden.
            </p>
            <p className="gavor-closing-names">— Arthur &amp; Amanda</p>
            <p className="gavor-closing-kana" aria-hidden="true">ありがとうございます</p>
          </div>

        </div>
      </div>

      <CountdownFooter />
      <WeddingChatBot />
    </div>
  );
}

export default Gavor;
