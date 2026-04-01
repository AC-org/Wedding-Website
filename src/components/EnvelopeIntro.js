import { useState } from 'react';
import './EnvelopeIntro.css';
import stampImg from '../A_A_Stamp.png';

function EnvelopeIntro({ onComplete }) {
  const [phase, setPhase] = useState('idle');

  function handleClick() {
    if (phase !== 'idle') return;
    setPhase('opening');
    setTimeout(onComplete, 1300);
  }

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

export default EnvelopeIntro;
