import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import HITTAHIT from './pages/HITTAHIT';
import Schema from './pages/Schema';
import Foton from './pages/Foton';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/hitta-hit" element={<HITTAHIT />} />
        <Route path="/schema" element={<Schema />} />
        <Route path="/foton" element={<Foton />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default App;