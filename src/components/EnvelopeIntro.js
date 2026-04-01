import { useState, useRef } from 'react';
import './EnvelopeIntro.css';
import stampImg from '../A_A_Stamp.png';

const VIDEO_URL =
  'https://cjczonwdytdhubxxwqle.supabase.co/storage/v1/object/sign/images/weddingHomepage2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYjQ5OWQxMy01MzJjLTRhYjgtOTY0NS1mMDdlM2EzZmZkMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvd2VkZGluZ0hvbWVwYWdlMi5tcDQiLCJpYXQiOjE3NjgxNDYwNDEsImV4cCI6MTc5OTY4MjA0MX0.a3MfyNKth2N2dGcq8V7bjxAxLWj6LbOzW7rYKlufDsE';

function EnvelopeIntro({ onComplete }) {
  const [phase, setPhase] = useState('idle');
  const isMobile = useRef(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  ).current;

  function handleClick() {
    if (phase !== 'idle') return;

    if (!isMobile) {
      // Desktop: original behaviour
      setPhase('opening');
      setTimeout(onComplete, 1300);
      return;
    }

    // Mobile: 6-phase sequence
    // idle → flap-opening → card-out → card-cover → zooming → fading → onComplete
    setPhase('flap-opening');
    setTimeout(() => setPhase('card-out'),   800);   // flap has rotated away
    setTimeout(() => setPhase('card-cover'), 1800);  // card has risen; now settle
    setTimeout(() => setPhase('zooming'),    2700);  // card covers envelope; now zoom
    setTimeout(() => setPhase('fading'),     4100);  // zoom fills screen; 3 s fade begins
    setTimeout(onComplete,                   7200);  // fade complete + 100 ms buffer
  }

  /* ── Desktop render — unchanged ──────────────────────────── */
  if (!isMobile) {
    return (
      <div
        className={`envelope-overlay${phase !== 'idle' ? ' opening' : ''}`}
        onClick={handleClick}
        role="button"
        aria-label="Öppna inbjudan"
      >
        <div className="envelope-bottom" />
        <div className="envelope-left" />
        <div className="envelope-right" />
        <div className="envelope-top" />
        <img src={stampImg} alt="A&A" className="envelope-stamp-img" />
        <span className="envelope-hint">— klicka för att öppna —</span>
      </div>
    );
  }

  /* ── Mobile render — luxury floating envelope ─────────────── */
  return (
    <div
      className={`mob-env-scene phase-${phase}`}
      onClick={phase === 'idle' ? handleClick : undefined}
      role="button"
      aria-label="Öppna inbjudan"
    >
      {/* Dark background — separate element so it can fade independently */}
      <div className="mob-env-bg" aria-hidden="true" />

      {/* Luxury sparkles scattered across the dark background */}
      <div className="mob-sparkles" aria-hidden="true">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className="mob-sparkle" />
        ))}
      </div>

      {/* ── Video card ─────────────────────────────────────────
          Sits BEFORE the wrapper in DOM so wrapper naturally
          stacks on top at first. Gets z-index:2 when rising.  */}
      <div className="mob-env-photo" aria-hidden="true">
        <video src={VIDEO_URL} autoPlay muted loop playsInline />
      </div>

      {/* ── Envelope wrapper ─────────────────────────────────── */}
      <div className="mob-env-wrapper" aria-hidden="true">

        {/* Flap: upward-pointing triangle ("roof").
            Rotates backward around its base = fold line.     */}
        <div className="mob-env-flap" />

        {/* Body: parchment rectangle below the fold line      */}
        <div className="mob-env-body" />

        {/* Wax seal: centred on the fold line, above both     */}
        <img src={stampImg} alt="" className="mob-env-stamp" />

      </div>

      {/* Pulsing click hint below the envelope */}
      <p className="mob-env-hint">— klicka för att öppna —</p>
    </div>
  );
}

export default EnvelopeIntro;
