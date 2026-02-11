import React from 'react';
import './Schema.css';
import { Link } from 'react-router-dom';

function Schema() {
  const schedules = {
    lördag: [
      { time: '14:00', event: 'Vi möts på Gammel Tammens grusgård i Österbybruk' },
      { time: '14:15', event: 'Busshämtning från Gammel Tammens grusgård' },
      { time: '14:40', event: 'Ankomst till Vendels kyrka' },
      { time: '15:00', event: 'Ceremoni börjar' },
      { time: '16:00', event: 'Busshämtning från Vendels kyrka' },
      { time: '16:30', event: 'Ankomst & mingel med bubbel & tårta'},
      { time: '18:00', event: 'Middag serveras, tal och underhållning'},
      { time: '22:00', event: 'Dans och fest!' },
      { time: 'Sent', event: 'Vickning' },
      { time: 'Senare', event: 'Bussar kör hem till övernattningsboenden' }
    ],
    söndag: [
      { time: '10:30', event: 'Checkout från övernattningsboenden. Åk till Orangeriet' },
      { time: '11:00', event: 'Brunch utanför Orangeriet'},
      { time: '13:00', event: 'Hemresor'}
    ]
  };

  const renderSchedule = (day, events) => (
    <div key={day} className="schema-day-section">
      <div className="schema-day-title">{day.charAt(0).toUpperCase() + day.slice(1)}</div>
      <div className="schema-content">
        <div className="schema-timeline">
          {events.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-event">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
        <p className="schema-subtitle">Här är en översikt över bröllopsdagens tidplan. Tiderna är uppskattade och kan variera något.</p>

        {Object.entries(schedules).map(([day, events]) => renderSchedule(day, events))}

        <div className="schema-info">
          <h2 className="schema-info-title">Viktig information</h2>
          <ul>
            <li><strong>Bussresa:</strong> Det ingår busshämtning från mötesstället till kyrkan och vidare till Orangeriet för er som bor på Wärdshuset Gammel Tammen och Vandrarhem Annexet. Bussar avgår enligt schemat. Ni som bor på Örbyhus Golfklubb ombes att köra själva till kyrkan och tillbaka.</li>
            <li><strong>Parkering:</strong> Parkering finns tillgänglig på båda platserna.</li>
            <li><strong>Mat & Dryck:</strong> Vegetariska alternativ och specialdietkost kan bokas vid OSA:n.</li>
            <li><strong>Klädkod:</strong> Fin kavaj/klänning rekommenderas för en vacker dag!</li>
            <li><strong>Frågor?</strong> Tveka inte att kontakta oss om du har några frågor!</li>
            <li><strong>Kontakt:</strong> <a href="mailto:arthur.ohman@gmail.com" className="email-info">arthur.ohman@gmail.com</a> & <a href="mailto:amanda.carp97@gmail.com" className="email-info">amanda.carp97@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schema;