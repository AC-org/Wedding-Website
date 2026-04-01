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
      image: 'vandrarhemmetannexet.png'
    },
    {
      id: 2,
      name: 'Wärdshuset Gammel Tammen',
      description: 'Historisk herrgård med charm från 1700-talet',
      address: 'Herrgårdsvägen 1, 748 32 Österbybruk',
      phone: '0295-212 00',
      email: 'info@gammeltammen.se',
      details: '14 dubbelrum + 1 trippelrum. Eget badrum. Restaurant på plats.',
      image: 'gammeltammen.png'
    },
    {
      id: 3,
      name: 'Örbyhus Golfklubb',
      description: 'Bekväma tvåbäddsrum vid Örbyhus slott',
      address: 'Örbyhus Slott, 748 95 Örbyhus',
      phone: '070-931 71 47',
      email: 'info@orbyhusgolf.se',
      details: '10 tvåbäddsrum (vissa med extrabädd). Eget badrum, delad dusch.',
      image: 'orbyhusgolfklubb.png'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
                    src={`${process.env.PUBLIC_URL}/${accommodation.image}`}
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
