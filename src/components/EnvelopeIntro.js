import { useState } from 'react';
import './EnvelopeIntro.css';
import stampImg from '../A_A_Stamp.png';

function EnvelopeIntro({ onComplete }) {
  const [opening, setOpening] = useState(false);

  function handleClick() {
    if (opening) return;
    setOpening(true);
    setTimeout(onComplete, 1300);
  }

  return (
    <div
      className={`envelope-overlay${opening ? ' opening' : ''}`}
      onClick={handleClick}
      role="button"
      aria-label="Öppna inbjudan"
    >
      {/* Bottom envelope body */}
      <div className="envelope-bottom" />

      {/* Top flap — triangle pointing down */}
      <div className="envelope-top">
        {/* <p className="envelope-text">
          Du är inbjuden till<br />
          Arthur &amp; Amanda Carps<br />
          bröllop 2026
        </p> */}
      </div>

      {/* Wax seal — sits on the seam, moves up with the flap */}
      <img
        src={stampImg}
        alt="A&A"
        className="envelope-stamp-img"
      />

      {/* Pulsing hint */}
      <span className="envelope-hint">— klicka för att öppna —</span>
    </div>
  );
}

export default EnvelopeIntro;
