import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2026-08-08T14:00:00"); // Set your wedding date here
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
          <p style={{ fontSize: '3rem', margin: '0' }}>❤</p>
          <h1 style={{fontSize: '3rem', margin: '0'}}>Välkommen till Arthur & Amandas bröllop!</h1>
          <h2>Vi är så glada om just du vill vara med och fira vår dag med oss</h2>
        </div>
      </header>


      {/* Countdown Timer Section */}
      <section className="countdown-section">
        <div className="countdown-timer">
          {timerComponents.length ? timerComponents : <span>Bröllopsdags!</span>}
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
