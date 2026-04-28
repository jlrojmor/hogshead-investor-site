export function MarketSection() {
  return (
    <section id="market" className="market-globe-section">
      <div className="market-globe-heading">
        <p className="market-globe-kicker">Market Intelligence</p>

        <h2>Tequila is global. The economics are concentrated.</h2>

        <p>
          A cinematic market atlas for origin, demand, premiumization, regional scale,
          and the commercial logic behind aged tequila inventory.
        </p>
      </div>

      <div className="market-globe-frame-wrap">
        <iframe
          id="hti-market-globe-frame"
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
