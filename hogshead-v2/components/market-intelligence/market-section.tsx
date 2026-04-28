export function MarketSection() {
  return (
    <section id="market" className="market-globe-section">
      <div className="market-globe-heading">
        <p className="market-globe-kicker">Market Intelligence</p>

        <h2>Tequila is global. The economics are concentrated.</h2>

        <p>
          Explore the premium tequila opportunity through a cinematic interactive market atlas:
          origin, demand, premiumization, regional scale, and global commercial optionality.
        </p>
      </div>

      <div className="market-globe-frame-wrap">
        <iframe
          src="/HTI_Globe_FINAL.html"
          title="Hogshead Tequila Interactive Market Globe"
          className="market-globe-frame"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default MarketSection;
