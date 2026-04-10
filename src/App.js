import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import RSVP from './pages/RSVP';
import HITTAHIT from './pages/HITTAHIT';
import Overnattning from './pages/Overnattning';
import Schema from './pages/Schema';
import Foton from './pages/Foton';
import Gavor from './pages/Gavor';
import EnvelopeIntro from './components/EnvelopeIntro';

function App() {
  const [showEnvelope, setShowEnvelope] = useState(
    !sessionStorage.getItem('envelopeOpened')
  );

  function handleEnvelopeComplete() {
    sessionStorage.setItem('envelopeOpened', '1');
    setShowEnvelope(false);
  }

  return (
    <>
      {/* Global video background – fixed, behind all pages */}
      <div className="global-bg" aria-hidden="true">
        <video
          className="global-bg-video"
          src="https://cjczonwdytdhubxxwqle.supabase.co/storage/v1/object/sign/images/weddingHomepage2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYjQ5OWQxMy01MzJjLTRhYjgtOTY0NS1mMDdlM2EzZmZkMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvd2VkZGluZ0hvbWVwYWdlMi5tcDQiLCJpYXQiOjE3NjgxNDYwNDEsImV4cCI6MTc5OTY4MjA0MX0.a3MfyNKth2N2dGcq8V7bjxAxLWj6LbOzW7rYKlufDsE"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="global-bg-overlay" />
      </div>

      {showEnvelope && <EnvelopeIntro onComplete={handleEnvelopeComplete} />}
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/hitta-hit" element={<HITTAHIT />} />
          <Route path="/overnattning" element={<Overnattning />} />
          <Route path="/schema" element={<Schema />} />
          <Route path="/foton" element={<Foton />} />
          <Route path="/gavor" element={<Gavor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;