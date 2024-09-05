import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import HITTAHIT from './pages/HITTAHIT';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/hitta-hit" element={<HITTAHIT />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default App;
