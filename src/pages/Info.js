import './Info.css';
import Navbar from '../components/Navbar';
import CountdownFooter from '../components/CountdownFooter';

function Info() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <div className="info-container">
        <div className="info-card">
          <p className="main-info">
            Vi firar 10 år tillsammans och den 8 augusti 2026 blir vi Man och Fru och vore oerhört tacksamma om just du vill vara med och fira denna dag!
          </p>
          <p className="main-info-sub">
            Dagen kommer att börja med att vi möts på XX kl XX. Efter det kommer en buss ta er till XX för cermonin. Bussen avgår kl XX från området.
            Cermonin kommer att hållas i Vendels kyrka och börjar kl XX. Efter cermonin blir ni upplockade av bussen som kommer att ta er till Orangeriet där middagen kommer att vara.
          </p>
        </div>
      </div>

      <CountdownFooter />
    </div>
  );
}

export default Info;
