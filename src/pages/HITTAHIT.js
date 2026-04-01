import React from 'react';
import './HITTAHIT.css';
import Navbar from '../components/Navbar';
import CountdownFooter from '../components/CountdownFooter';
import WeddingChatBot from '../components/WeddingChatBot/WeddingChatBot';
import VideoBackground from '../components/VideoBackground';

function HittaHit() {
  return (
    <div className="hittahit-wrapper">
      <div className="hittahit-container">
        <VideoBackground />
        <Navbar />
      
      <div className="hittahit-content">
        <div className="hittahit-columns">
          <div className="hittahit-card">
            <h1 className="hittahit-title">Hitta till Orangeriet</h1>
            <p className="hittahit-subtitle">Kom och fira med oss i Örbyhus Slotts Orangeri!</p>
            <div className="hittahit-map-container">
              <iframe title="örbyhus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.8084398943706!2d17.706739626200605!3d60.19987882485638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4660808d7263628d%3A0xd2a1ab33d04c1309!2s%C3%96RBYHUS%20SLOTT%20114%2C%20748%2095%20%C3%96rbyhus!5e1!3m2!1ssv!2sse!4v1774254667015!5m2!1ssv!2sse"
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
            <p className="hittahit-subtitle">Här kommer ceremonin att äga rum! Vi kommer åka hit via bokade bussar.</p>
            <div className="hittahit-map-container">
              <iframe title="vendels"
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
            <strong>Fun fact: </strong>Vendels kyrkas äldsta del är från sent 1200-talet!
            </p>
          </div>
        </div>
      </div>
      </div>

      <CountdownFooter />
      <WeddingChatBot />
    </div>
  );
}

export default HittaHit;
