import React from 'react';
import './Schema.css';
import { Link } from 'react-router-dom';

function Schema() {
  const schedule = [
    { time: '14:00', event: 'Möte på Ullsgården' },
    { time: '14:30', event: 'Busshämtning från Ullsgården' },
    { time: '15:15', event: 'Ankomst till Vendels kyrka' },
    { time: '15:30', event: 'Ceremoni börjar' },
    { time: '16:30', event: 'Ceremoni slutar, champagnefika' },
    { time: '17:00', event: 'Busshämtning från kyrkan' },
    { time: '18:00', event: 'Ankomst till Örbyhus Slott - Orangeriet' },
    { time: '18:30', event: 'Middag serveras' },
    { time: '20:00', event: 'Tal och underhållning' },
    { time: '21:00', event: 'Dansuppmaning och fest' },
  ];

  return (
    <div className="schema-container">
      {/* Navigation Menu */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/rsvp">OSA</Link></li>
          <li><Link to="/hitta-hit">Hitta hit</Link></li>
          <li><Link to="/schema">Schema</Link></li>
          <li><Link to="/foton">Foton</Link></li>
        </ul>
      </nav>

      <div className="schema-card">
        <h1 className="schema-title">Schema för dagen</h1>
        <p className="schema-subtitle">Här är en översikt över bröllopsdagens tidplan</p>

        <div className="schema-content">
          <div className="schema-timeline">
            {schedule.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-event">{item.event}</div>
              </div>
            ))}
          </div>

          <div className="schema-info">
            <h2>Viktig information</h2>
            <ul>
              <li><strong>Bussresa:</strong> Det ingår busshämtning från mötesstället till kyrkan och vidare till Orangeriet. Bussar avgår enligt schemat.</li>
              <li><strong>Parkering:</strong> Parkering finns tillgänglig på båda platserna.</li>
              <li><strong>Mat & Dryck:</strong> Vegetariska alternativ och specialdietkost kan bokas vid OSA:n.</li>
              <li><strong>Klädkod:</strong> Fin kavaj/klänning rekommenderas för en vacker dag!</li>
              <li><strong>Frågor?</strong> Tveka inte att kontakta oss om du har några frågor!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schema;
