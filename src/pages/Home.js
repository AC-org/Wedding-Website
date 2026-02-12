import './Home.css';
import Navbar from '../components/Navbar';
import CountdownFooter from '../components/CountdownFooter';

function Home() {
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
          <p style={{ fontSize: '3rem', margin: '20px 20px 20px 20px' }}>❤ ❤ ❤</p>
          <p style={{ fontSize: '1.5rem'}}>
            Vi firar 10 år tillsammans och den 8 augusti 2026 blir vi man och fru.
          </p>
          <p style={{ fontSize: '1.5rem', margin: '0' }}>
            Vi skulle bli oerhört glada om du ville vara med och fira denna speciella dag tillsammans med oss!
          </p>
        </div>
      </header>

      <CountdownFooter />
    </div>
  );
}

export default Home;
