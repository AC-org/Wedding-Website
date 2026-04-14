import './CountdownFooter.css';

function CountdownFooter() {
  return (
    <section className="wedding-countdown" aria-label="Bröllopsinformation">
      <div className="wedding-countdown-inner">
        <p className="wedding-countdown-names">
          <span className="wc-heart" aria-hidden="true">{"♥\uFE0E"}</span>
          {" Herr och Fru Carp "}
          <span className="wc-heart" aria-hidden="true">{"♥\uFE0E"}</span>
        </p>
        <p className="wedding-countdown-date">8 Augusti 2026</p>
      </div>
    </section>
  );
}

export default CountdownFooter;
