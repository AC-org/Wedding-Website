import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2026-08-15T12:00:00"); // Set your wedding date here
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

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="home-container">
      {/* Navigation Menu */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/rsvp">OSA</Link></li>
          <li><Link to="/hitta-hit">Hitta hit</Link></li>
        </ul>
      </nav>

      <header className="hero-section">
      <video
          className="hero-video"
          src="https://ligyyhhxuvbnvyfnurpi.supabase.co/storage/v1/object/public/Images/weddingHomepage2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay">
          <h1>Välkommen till Arthur & Amandas bröllop!</h1>
          <p>Fira med oss BÄSTA DAGEN 2026!!!</p>
        </div>
      </header>


      {/* Countdown Timer Section */}
      <section className="countdown-section">
        <div className="countdown-timer">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <Link to="/rsvp">
          <button className="rsvp-button">OSA</button>
          </Link>
      </section>

      <footer className="home-footer">
        <p>❤ Mr & Mrs Carp ❤</p>
      </footer>
    </div>
  );
}

export default Home;
