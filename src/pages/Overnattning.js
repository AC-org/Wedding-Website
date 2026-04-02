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
      description: 'Budget-vänligt alternativ med egen dusch/toa',
      address: 'Herrgårdsvägen 21, 748 32 Österbybruk',
      phone: '076-025 43 48',
      email: 'annexet.osterbybruk@outlook.com',
      details: '10 standardrum á 2 gäster + 2 attefallshus. Lakan och handduk ingår.',
      image: 'https://cjczonwdytdhubxxwqle.supabase.co/storage/v1/object/sign/images/vandrarhemmetannexet.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYjQ5OWQxMy01MzJjLTRhYjgtOTY0NS1mMDdlM2EzZmZkMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvdmFuZHJhcmhlbW1ldGFubmV4ZXQucG5nIiwiaWF0IjoxNzc1MDU0MjU1LCJleHAiOjE4MDY1OTAyNTV9.qphobnbTkOdsUoz35qrJiuOU73E44-I1yZGz9-ZFxxo'
    },
    {
      id: 2,
      name: 'Wärdshuset Gammel Tammen',
      description: 'Historisk herrgård med charm från 1700-talet',
      address: 'Herrgårdsvägen 1, 748 32 Österbybruk',
      phone: '0295-212 00',
      email: 'info@gammeltammen.se',
      details: '14 dubbelrum + 1 trippelrum. Eget badrum. Restaurant på plats.',
      image: 'https://cjczonwdytdhubxxwqle.supabase.co/storage/v1/object/sign/images/gammeltammen.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYjQ5OWQxMy01MzJjLTRhYjgtOTY0NS1mMDdlM2EzZmZkMTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvZ2FtbWVsdGFtbWVuLnBuZyIsImlhdCI6MTc3NTA1NDI0NCwiZXhwIjoxODA2NTkwMjQ0fQ.27po-hmrNriPJv3T4McuarSGVEXr6iNWb-ThZiLfsGg'
    },
    {
      id: 3,
      name: 'Örbyhus Golfklubb',
      description: 'Bekväma tvåbäddsrum vid Örbyhus slott',
      address: 'Örbyhus Slott, 748 95 Örbyhus',
      phone: '070-931 71 47',
      email: 'info@orbyhusgolf.se',
      details: '10 tvåbäddsrum (vissa med extrabädd). Eget badrum, delad dusch.',
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
              Vi har ordnat boende alla gäster så ni behöver inte boka något själva!
              Vi tar hand om allt det praktiska och meddelar er vilket boende ni är tilldelade
              i god tid innan bröllopet.
            </p>
            <div className="overnattning-info-bullets">
              <p>
                <span className="info-bullet-icon">✦</span>
                Kort efter OSA-datumet kontaktar vi er med betalningsinformation (Swish).
              </p>
              <p>
                <span className="info-bullet-icon">✦</span>
                Vi bjuder på bröllopet och festen. Boendekostnaden står ni för själva.
              </p>
              <p>
                <span className="info-bullet-icon">✦</span>
                Planerar du att inte övernatta? Ange det i ditt OSA-svar så ordnar det sig, annars utgår vi från att alla stannar.
              </p>
            </div>
          </div>

          <div className="accommodations-grid">
            {accommodations.map((accommodation) => (
              <div key={accommodation.id} className="accommodation-card">
                {accommodation.image && (
                  <img
                    src={accommodation.image}
                    alt=""
                    aria-hidden="true"
                    className="accommodation-bg-img"
                  />
                )}
                <h2 className="accommodation-name">{accommodation.name}</h2>
                <p className="accommodation-description">{accommodation.description}</p>

                <div className="accommodation-details">
                  <p><strong>Adress:</strong> {accommodation.address}</p>
                  {accommodation.phone && <p><strong>Telefon:</strong> {accommodation.phone}</p>}
                  {accommodation.email && <p><strong>E-post:</strong> {accommodation.email}</p>}
                  {accommodation.details && <p className="accommodation-details-text">{accommodation.details}</p>}
                </div>
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
