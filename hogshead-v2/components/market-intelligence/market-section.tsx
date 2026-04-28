export function MarketSection() {
  return (
    <section id="market" className="market-globe-section">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .market-globe-section {
              padding-top: clamp(72px, 6vw, 96px) !important;
              background:
                linear-gradient(180deg,
                  #f4efe5 0%,
                  #f3efe6 28%,
                  #e8f2ef 43%,
                  #315d5f 52%,
                  #050a12 64%,
                  #050a12 100%) !important;
            }

            .market-globe-section::before {
              height: 520px !important;
              background:
                radial-gradient(circle at 16% 18%, rgba(216,139,66,.10), transparent 32%),
                radial-gradient(circle at 78% 18%, rgba(123,198,199,.18), transparent 38%),
                linear-gradient(180deg, rgba(251,248,240,.96), rgba(238,244,241,.92) 45%, rgba(16,74,79,.42) 78%, rgba(5,10,18,.98) 100%) !important;
            }

            .market-globe-heading {
              width: min(1180px, calc(100% - 88px)) !important;
              margin-bottom: 0 !important;
              padding: 0 0 clamp(22px, 2.4vw, 34px) !important;
              grid-template-columns: minmax(0, .96fr) minmax(360px, .62fr) !important;
              gap: clamp(38px, 6vw, 96px) !important;
              align-items: end !important;
            }

            .market-globe-heading::before {
              left: -9vw !important;
              right: -9vw !important;
              bottom: -18px !important;
              height: 128px !important;
              background: linear-gradient(180deg, rgba(244,239,229,0), rgba(137,178,174,.18) 46%, rgba(5,10,18,.84) 100%) !important;
            }

            .market-globe-heading::after {
              display: none !important;
            }

            .market-globe-title-block {
              max-width: 780px;
            }

            .market-globe-kicker {
              grid-column: auto !important;
              margin: 0 0 22px !important;
              color: #00636b !important;
              letter-spacing: .34em !important;
            }

            .market-globe-heading h2 {
              max-width: 760px !important;
              font-size: clamp(58px, 6vw, 92px) !important;
              line-height: .86 !important;
              letter-spacing: -.062em !important;
            }

            .market-globe-lede {
              position: relative;
              margin: 0 0 10px !important;
              max-width: 500px !important;
              padding: 24px 0 24px 34px !important;
              border-left: 1px solid rgba(0,63,70,.18) !important;
              color: rgba(0,63,70,.68) !important;
              font-weight: 600 !important;
              line-height: 1.75 !important;
            }

            .market-globe-lede::before {
              content: '';
              position: absolute;
              left: -1px;
              top: 24px;
              width: 1px;
              height: 42px;
              background: linear-gradient(180deg, #d88b42, rgba(216,139,66,0));
            }

            .market-globe-frame-wrap {
              margin-top: -1px !important;
              height: min(1040px, 108vh) !important;
              min-height: 920px !important;
              box-shadow: 0 -18px 70px rgba(5,10,18,.26), 0 52px 150px rgba(0,42,46,.38) !important;
            }

            .market-globe-frame-wrap::before {
              height: 44px !important;
              background: linear-gradient(180deg, rgba(5,10,18,.42), rgba(5,10,18,0)) !important;
            }

            @media (max-width: 900px) {
              .market-globe-heading {
                width: min(100% - 34px, 720px) !important;
                grid-template-columns: 1fr !important;
                gap: 22px !important;
              }
              .market-globe-lede {
                border-left: 0 !important;
                padding: 0 !important;
              }
              .market-globe-lede::before { display: none !important; }
            }
          `,
        }}
      />

      <div className="market-globe-heading">
        <div className="market-globe-title-block">
          <p className="market-globe-kicker">Market Intelligence</p>
          <h2>Tequila is global. The economics are concentrated.</h2>
        </div>

        <p className="market-globe-lede">
          A cinematic market atlas connecting origin, demand, premiumization,
          regional scale, and the commercial logic behind aged tequila inventory.
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
