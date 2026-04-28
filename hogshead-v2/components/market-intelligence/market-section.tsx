export function MarketSection() {
  return (
    <section id="market" className="market-globe-section">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .market-globe-section {
              position: relative !important;
              padding-top: clamp(58px, 5vw, 76px) !important;
              background:
                linear-gradient(180deg,
                  #f6f0e4 0%,
                  #f3efe6 42%,
                  #dcece8 68%,
                  #061015 100%) !important;
              overflow: hidden !important;
            }

            .market-globe-section::before {
              content: '';
              position: absolute;
              inset: 0 0 auto 0;
              height: 430px !important;
              pointer-events: none;
              background:
                radial-gradient(circle at 16% 12%, rgba(216,139,66,.10), transparent 34%),
                radial-gradient(circle at 78% 24%, rgba(123,198,199,.20), transparent 40%),
                linear-gradient(180deg, rgba(251,248,240,.98), rgba(238,244,241,.88) 58%, rgba(5,10,18,0) 100%) !important;
              z-index: 0;
            }

            .market-globe-heading {
              position: relative !important;
              z-index: 2 !important;
              width: min(1140px, calc(100% - 88px)) !important;
              margin: 0 auto !important;
              padding: clamp(18px, 2vw, 26px) 0 clamp(34px, 3.2vw, 48px) !important;
              display: grid !important;
              grid-template-columns: minmax(0, .96fr) minmax(340px, .62fr) !important;
              gap: clamp(40px, 6vw, 92px) !important;
              align-items: end !important;
            }

            .market-globe-heading::before,
            .market-globe-heading::after {
              display: none !important;
            }

            .market-globe-title-block {
              max-width: 720px !important;
            }

            .market-globe-kicker {
              margin: 0 0 18px !important;
              color: #00636b !important;
              font-weight: 900 !important;
              letter-spacing: .34em !important;
              text-transform: uppercase !important;
            }

            .market-globe-heading h2 {
              max-width: 720px !important;
              margin: 0 !important;
              color: #013f46 !important;
              font-size: clamp(52px, 5.45vw, 84px) !important;
              line-height: .88 !important;
              letter-spacing: -.058em !important;
            }

            .market-globe-lede {
              position: relative !important;
              margin: 0 0 6px !important;
              max-width: 470px !important;
              padding: 24px 0 24px 32px !important;
              border-left: 1px solid rgba(0,63,70,.18) !important;
              color: rgba(0,63,70,.70) !important;
              font-size: 16px !important;
              font-weight: 600 !important;
              line-height: 1.7 !important;
            }

            .market-globe-lede::before {
              content: '' !important;
              position: absolute !important;
              left: -1px !important;
              top: 24px !important;
              width: 1px !important;
              height: 46px !important;
              background: linear-gradient(180deg, #d88b42, rgba(216,139,66,0)) !important;
            }

            .market-globe-frame-wrap {
              position: relative !important;
              z-index: 1 !important;
              width: 100% !important;
              height: min(980px, 100vh) !important;
              min-height: 850px !important;
              margin: 0 !important;
              background: #050a12 !important;
              overflow: hidden !important;
              box-shadow: 0 -28px 90px rgba(5,10,18,.26), 0 54px 150px rgba(0,42,46,.34) !important;
            }

            .market-globe-frame-wrap::before {
              content: '' !important;
              position: absolute !important;
              left: 0 !important;
              right: 0 !important;
              top: 0 !important;
              height: 76px !important;
              z-index: 3 !important;
              pointer-events: none !important;
              background: linear-gradient(180deg, rgba(5,10,18,.66), rgba(5,10,18,.18) 54%, rgba(5,10,18,0)) !important;
            }

            .market-globe-frame {
              display: block !important;
              width: 100% !important;
              height: 100% !important;
              border: 0 !important;
              background: #050a12 !important;
            }

            @media (max-width: 900px) {
              .market-globe-heading {
                width: min(100% - 34px, 720px) !important;
                grid-template-columns: 1fr !important;
                gap: 20px !important;
              }
              .market-globe-heading h2 {
                font-size: clamp(46px, 14vw, 68px) !important;
              }
              .market-globe-lede {
                border-left: 0 !important;
                padding: 0 !important;
              }
              .market-globe-lede::before { display: none !important; }
              .market-globe-frame-wrap {
                min-height: 760px !important;
              }
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
