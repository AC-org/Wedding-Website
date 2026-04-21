import { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

function calcTimeLeft() {
  const wedding = new Date('2026-08-08T14:00:00');
  const diff = wedding - new Date();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
  };
}

function Home() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="home-container">
      <Navbar />

      <section className="hero-section" aria-label="Välkomstsektionen">
        <video
          className="hero-video"
          src="https://cjczonwdytdhubxxwqle.supabase.co/storage/v1/object/sign/images/weddingHomepage2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYjQ5OWQxMy01MzJjLTRhYjgtOTY0NS1mMDdlM2EzZmZkMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvd2VkZGluZ0hvbWVwYWdlMi5tcDQiLCJpYXQiOjE3NjgxNDYwNDEsImV4cCI6MTc5OTY4MjA0MX0.a3MfyNKth2N2dGcq8V7bjxAxLWj6LbOzW7rYKlufDsE"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="hero-overlay">
          <p className="hero-pre">Du är inbjuden till</p>

          <h1 className="hero-names">Arthur &amp; Amanda</h1>

          <p className="hero-date">8 Augusti 2026</p>

          <p className="hero-body">
            Vi firar 10 år tillsammans och den 8 augusti 2026 blir vi man och fru.
            Vi skulle bli oerhört glada om du ville vara med och fira denna speciella dag tillsammans med oss!
          </p>

          {timeLeft ? (
            <div className="hero-countdown" aria-label="Nedräkning till bröllopet">
              <div className="countdown-unit">
                <span className="countdown-number">{timeLeft.days}</span>
                <span className="countdown-label">dagar kvar</span>
              </div>
            </div>
          ) : (
            <p className="countdown-done">Bröllopsdags! 💕</p>
          )}
          {/* <p className="hero-body-note">
            Läs gärna igenom denna hemsida noggrant för att ta del av all information inför bröllopet och tveka inte att höra av dig om du har några frågor!
          </p>
          <p className="hero-body-note">
            OSA även via formuläret på sidan "OSA" så snart som möjligt, dock senast 1 juni 2026.
          </p> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
