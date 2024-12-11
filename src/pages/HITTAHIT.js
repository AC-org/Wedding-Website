import React from 'react';
import './HITTAHIT.css';
import { Link } from 'react-router-dom';

function HittaHit() {
  return (
    <div className="hittahit-container">
      {/* Fixed Navigation Menu */}
      <nav className="navbar-fixed">
        <ul className="nav-list">
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/rsvp">OSA</Link></li>
          <li><Link to="/hitta-hit">Hitta hit</Link></li>
        </ul>
      </nav>
      
      <div className="hittahit-content">
        <div className="hittahit-columns">
          <div className="hittahit-card">
            <h1 className="hittahit-title">Hitta till Orangeriet</h1>
            <p className="hittahit-subtitle">Kom och fira (festa) med oss i Örbyhus Slotts Orangeri!</p>
            <div className="hittahit-map-container">
              <iframe title="örbyhus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.9624607982223!2d17.706551677512564!3d60.20000647504768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4660808ceac82f8b%3A0xaad3a038af1d656b!2s%C3%96rbyhus%20slott!5e1!3m2!1ssv!2sse!4v1725468858920!5m2!1ssv!2sse"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="hittahit-info">
            <strong>Fun fact: </strong>Namnet Orangeri, har sitt ursprung i det franska ordet för apelsin, Orange, då apelsiner och andra citrusfrukter var en del av de växter som vinterförvarades i ett Orangeri.
            </p>
          </div>

          <div className="hittahit-card">
            <h1 className="hittahit-title">Hitta till Vendels Kyrka</h1>
            <p className="hittahit-subtitle">Här kommer ceremonin att äga rum!</p>
            <div className="hittahit-map-container">
              <iframe title="turinge"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.125990256487!2d17.598422677618522!3d60.16357817502902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466081dc6998a097%3A0x452b6f0c0d855b7!2sVendels%20kyrka!5e1!3m2!1ssv!2sse!4v1729422675691!5m2!1ssv!2sse"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="hittahit-info">
            <strong>Fun fact: </strong>Turinge kyrkas äldsta del är från 1100-talet! Denna vackra lilla kyrkan blickar ut över Vidbynäs och Nykvarn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HittaHit;
