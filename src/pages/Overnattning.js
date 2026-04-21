import './Overnattning.css';
import Navbar from '../components/Navbar';
import CountdownFooter from '../components/CountdownFooter';
import WeddingChatBot from '../components/WeddingChatBot/WeddingChatBot';
import VideoBackground from '../components/VideoBackground';

function Overnattning() {
  const accommodations = [
    {
      id: 1,
      name: 'Vandrarhemmet Annexet',
      description: 'Ombonat och välkomnande, med allt du behöver för en skön övernattning',
      address: 'Herrgårdsvägen 21, 748 32 Österbybruk',
      phone: '076-025 43 48',
      email: 'annexet.osterbybruk@outlook.com',
      details: '10 standardrum á 2 gäster + 2 attefallshus.',
      image: 'https://cjczonwdytdhubxxwqle.supabase.co/storage/v1/object/sign/images/vandrarhemmetannexet.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYjQ5OWQxMy01MzJjLTRhYjgtOTY0NS1mMDdlM2EzZmZkMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvdmFuZHJhcmhlbW1ldGFubmV4ZXQucG5nIiwiaWF0IjoxNzc1MDU0MjU1LCJleHAiOjE4MDY1OTAyNTV9.qphobnbTkOdsUoz35qrJiuOU73E44-I1yZGz9-ZFxxo'
    },
    {
      id: 2,
      name: 'Wärdshuset Gammel Tammen',
      description: 'Tidlös charm i en herrgård från 1700-talet, med historia i varje hörn',
      address: 'Herrgårdsvägen 1, 748 32 Österbybruk',
      phone: '0295-212 00',
      email: 'info@gammeltammen.se',
      details: '14 dubbelrum + 1 trippelrum.',
      image: 'https://cjczonwdytdhubxxwqle.supabase.co/storage/v1/object/sign/images/gammeltammen.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYjQ5OWQxMy01MzJjLTRhYjgtOTY0NS1mMDdlM2EzZmZkMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvZ2FtbWVsdGFtbWVuLnBuZyIsImlhdCI6MTc3NTA1NDI0NCwiZXhwIjoxODA2NTkwMjQ0fQ.27po-hmrNriPJv3T4McuarSGVEXr6iNWb-ThZiLfsGg'
    },
    {
      id: 3,
      name: 'Örbyhus Golfklubb',
      description: 'Fridfull miljö i det vackra landskapet kring Örbyhus slott',
      address: 'Örbyhus Slott, 748 95 Örbyhus',
      phone: '070-931 71 47',
      email: 'info@orbyhusgolf.se',
      details: '10 tvåbäddsrum varav vissa med extrabädd.',
      image: 'https://cjczonwdytdhubxxwqle.supabase.co/storage/v1/object/sign/images/orbyhusgolfklubb.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYjQ5OWQxMy01MzJjLTRhYjgtOTY0NS1mMDdlM2EzZmZkMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvb3JieWh1c2dvbGZrbHViYi5wbmciLCJpYXQiOjE3NzUwNTQyNjUsImV4cCI6MTgwNjU5MDI2NX0.QOzgDormYl39Sxm3vIsyXoTKR_xyZgbHS-AqVK9aE4o'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <VideoBackground />
      <Navbar />

      <div className="overnattning-container">
        <div className="overnattning-content">
          <div className="overnattning-info">
            <p className="overnattning-info-text">
              Vi har ordnat boende till alla gäster så ni behöver inte boka något själva!
              
              Vi tar hand om allt det praktiska och meddelar er vilket boende ni är tilldelade
              i god tid innan bröllopet.
            </p>
            <div className="overnattning-info-bullets">
              <p>
                <span className="info-bullet-icon">✦</span>
                Boendekostnaden står ni för själva.
              </p>
              <p>
                <span className="info-bullet-icon">✦</span>
                Kort efter OSA-datumet kontaktar vi er med betalningsinformation (Swish).
              </p>
              <p>
                <span className="info-bullet-icon">✦</span>
                Planerar ni att inte övernatta? Ange det i ditt OSA-svar så ordnar det sig, annars utgår vi från att alla stannar. Vi hade verkligen uppskattat om ni har möjlighet att bo över, då vi planerar att ses på brunch dagen efter för att sammanfatta gårdagens bravader!
              </p>
            </div>
          </div>

          <div className="accommodations-grid">
            {accommodations.map((accommodation) => (
              <div key={accommodation.id} className="accommodation-card">
                <div className="accommodation-text">
                  <h2 className="accommodation-name">{accommodation.name}</h2>
                  <p className="accommodation-description">{accommodation.description}</p>

                  <div className="accommodation-details">
                    <p><strong>Adress:</strong> {accommodation.address}</p>
                    {/* {accommodation.phone && <p><strong>Telefon:</strong> {accommodation.phone}</p>}
                    {accommodation.email && <p><strong>E-post:</strong> {accommodation.email}</p>} */}
                    {accommodation.details && <p className="accommodation-details-text">{accommodation.details}</p>}
                  </div>
                </div>
                {accommodation.image && (
                  <div className="accommodation-image-wrapper">
                    <img
                      src={accommodation.image}
                      alt={accommodation.name}
                      className="accommodation-bg-img"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <CountdownFooter />
      <WeddingChatBot />
    </div>
  );
}

export default Overnattning;
