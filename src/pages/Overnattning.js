import './Overnattning.css';
import Navbar from '../components/Navbar';

function Overnattning() {
  const accommodations = [
    {
      id: 1,
      name: 'Hotel Namn 1',
      description: 'En trevlig hotel i centrala Vendels',
      address: 'Adress 1',
      phone: '08-XXX XXXX',
      website: 'https://www.example.com',
      price: 'XX kr/natt'
    },
    {
      id: 2,
      name: 'Hotel Namn 2',
      description: 'Bekväm och nära bröllopslokalen',
      address: 'Adress 2',
      phone: '08-XXX XXXX',
      website: 'https://www.example.com',
      price: 'XX kr/natt'
    },
    {
      id: 3,
      name: 'Hotel Namn 3',
      description: 'Elegant hotell med fin service',
      address: 'Adress 3',
      phone: '08-XXX XXXX',
      website: 'https://www.example.com',
      price: 'XX kr/natt'
    }
  ];

  return (
    <div className="overnattning-container">
      <Navbar />

      <div className="overnattning-content">
        <h1 className="overnattning-title">Overnattning</h1>
        <p className="overnattning-subtitle">Här är några förslag på där du kan sova under din vistelse</p>

        <div className="accommodations-grid">
          {accommodations.map((accommodation) => (
            <div key={accommodation.id} className="accommodation-card">
              <h2 className="accommodation-name">{accommodation.name}</h2>
              <p className="accommodation-description">{accommodation.description}</p>

              <div className="accommodation-details">
                <p><strong>Adress:</strong> {accommodation.address}</p>
                <p><strong>Telefon:</strong> {accommodation.phone}</p>
                <p><strong>Pris:</strong> {accommodation.price}</p>
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
  );
}

export default Overnattning;
