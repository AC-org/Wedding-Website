import { useState, useEffect } from 'react';
import './CountdownFooter.css';

function calcTimeLeft() {
  const wedding = new Date('2026-08-08T14:00:00');
  const diff = wedding - new Date();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
  };
}

function CountdownFooter() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setTimeout(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearTimeout(id);
  });

  return (
    <section className="wedding-countdown" aria-label="Nedräkning till bröllopet">
      <div className="wedding-countdown-inner">
        {timeLeft ? (
          <div className="wedding-countdown-grid">
            <div className="wc-unit">
              <span className="wc-number">{timeLeft.days}</span>
              <span className="wc-label">dagar kvar</span>
            </div>
          </div>
        ) : (
          <p className="wc-done">Bröllopsdags! 💕</p>
        )}

        <p className="wedding-countdown-names">♥ Mr &amp; Mrs Carp ♥</p>
        <p className="wedding-countdown-date">8 Augusti 2026</p>
      </div>
    </section>
  );
}

export default CountdownFooter;
