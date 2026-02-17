import { useState, useEffect } from 'react';
import './CountdownFooter.css';

function CountdownFooter() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2026-08-08T14:00:00");
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const getSwedishLabel = (interval) => {
    const labels = {
      days: 'dagar',
      hours: 'timmar',
    };
    return labels[interval] || interval;
  };

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {getSwedishLabel(interval)}{" "}
      </span>
    );
  });

  return (
    <>
      <section className="countdown-footer-section">
        <div className="countdown-footer-timer">
          {timerComponents.length ? timerComponents : <span>Bröllopsdags!</span>}
        </div>
      </section>

      <footer className="countdown-footer">
        <p>❤ Mr & Mrs Carp ❤</p>
      </footer>
    </>
  );
}

export default CountdownFooter;