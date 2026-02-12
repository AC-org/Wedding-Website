import './Overnattning.css';
import Navbar from '../components/Navbar';
import CountdownFooter from '../components/CountdownFooter';

function Overnattning() {
  const accommodations = [
    {
      id: 1,
      name: 'Vandrarhemmet Annexet',
      description: 'Budget-vänligt alternativ med egen dusch/toa',
      address: 'Österbybruk',
      phone: '-',
      website: '#',
      price: '400 kr/gäst/natt',
      details: '10 standardrum á 2 gäster + 2 attefallshus. Lakan och handduk ingår.'
    },
    {
      id: 2,
      name: 'Wärdshuset Gammel Tammen',
      description: 'Historisk herrgård med charm från 1700-talet',
      address: 'Österbybruks Herrgård',
      phone: '-',
      website: 'https://gammeltammen.se/',
      price: '850-1000 kr/gäst/natt',
      details: '14 dubbelrum + 1 trippelrum. Eget badrum. Restaurant på plats.'
    },
    {
      id: 3,
      name: 'Örbyhus Golfklubb',
      description: 'Bekväma tvåbäddsrum vid Örbyhus slott',
      address: 'Örbyhus Slott, 748 95 Örbyhus',
      phone: '070-931 71 47',
      email: 'info@orbyhusgolf.se',
      website: 'https://www.orbyhusgolf.se/?page_id=376',
      price: '795 kr/gäst/natt',
      details: '10 tvåbäddsrum (vissa med extrabädd). Eget badrum, delad dusch.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <div className="overnattning-container">
        <div className="overnattning-content">
          <div className="overnattning-info">
            <p className="overnattning-info-text">
              Vi erbjuder tre olika boendealternativ med varierande priser.
              Du väljer själv vilket som passar dig bäst!
              Vi äter gemensam brunch på söndagen på Örbyhus Orangeriet.
            </p>
            <p className="overnattning-contact">
              <strong>Kontakta oss för att boka</strong> — Det går via bröllopsparet
            </p>
          </div>

          <div className="accommodations-grid">
            {accommodations.map((accommodation) => (
              <div key={accommodation.id} className="accommodation-card">
                <h2 className="accommodation-name">{accommodation.name}</h2>
                <p className="accommodation-description">{accommodation.description}</p>

                <div className="accommodation-details">
                  <p><strong>Adress:</strong> {accommodation.address}</p>
                  <p><strong>Telefon:</strong> {accommodation.phone}</p>
                  {accommodation.email && <p><strong>E-mail:</strong> {accommodation.email}</p>}
                  <p><strong>Pris:</strong> {accommodation.price}</p>
                  {accommodation.details && <p className="accommodation-details-text">{accommodation.details}</p>}
                  {accommodation.note && <p className="accommodation-note"><strong>{accommodation.note}</strong></p>}
                </div>

                <a
                  href={accommodation.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accommodation-link"
                >
                  Besök hemsida
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CountdownFooter />
    </div>
  );
}

export default Overnattning;
