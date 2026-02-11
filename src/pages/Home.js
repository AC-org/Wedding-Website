import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
      <Navbar />

      <header className="hero-section">
      <video
          className="hero-video"
          src="https://cjczonwdytdhubxxwqle.supabase.co/storage/v1/object/sign/images/weddingHomepage2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYjQ5OWQxMy01MzJjLTRhYjgtOTY0NS1mMDdlM2EzZmZkMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvd2VkZGluZ0hvbWVwYWdlMi5tcDQiLCJpYXQiOjE3NjgxNDYwNDEsImV4cCI6MTc5OTY4MjA0MX0.a3MfyNKth2N2dGcq8V7bjxAxLWj6LbOzW7rYKlufDsE"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay">
          <h1 style={{fontSize: '3rem', margin: '0'}}>Välkommen till Arthur & Amandas bröllop!</h1>
          <p style={{ fontSize: '3rem', margin: '0' }}>❤</p>
        </div>
      </header>

    <div>
      <p className="main-info">
        Vi firar 10 år tillsammans och den 8 augusti 2026 blir vi Man och Fru och vore oerhört tacksamma om just du vill vara med och fira denna dag!
      </p>
      <p className="main-info-sub">
        Dagen kommer att börja med att vi möts på XX kl XX. Efter det kommer en buss ta er till XX för cermonin. Bussen avgår kl XX från området. 
        Cermonin kommer att hållas i Vendels kyrka och börjar kl XX. Efter cermonin blir ni upplockade av bussen som kommer att ta er till Orangeriet där middagen kommer att vara.
      </p>
    </div>

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
