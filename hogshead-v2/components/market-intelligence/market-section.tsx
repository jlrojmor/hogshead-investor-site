"use client";

import { useEffect } from "react";

export function MarketSection() {
  useEffect(() => {
    const tickerItems = [
      "U.S. tequila/mezcal supplier revenue grew 2.9% to $6.7B in 2024",
      "Tequila/mezcal was one of the only U.S. spirits categories showing sales growth in 2024",
      "U.S. spirits held 42.2% market share in 2024",
      "Tequila/mezcal revenue grew 7.9% in 2023",
      "The U.S. remains the leading market for agave spirits",
      "Premium-plus agave spirits are expected to drive future category value growth",
      "Reposado requires at least 2 months of wood contact",
      "Añejo requires at least 1 year of maturation",
      "Extra Añejo requires at least 3 years of maturation",
      "Aging converts liquid inventory into scarcer commercial inventory",
    ];

    const buildTickerHTML = () => {
      const itemMarkup = tickerItems
        .map((item) => `<span class=\"hogshead-live-ticker-item\">${item}</span>`)
        .join("");

      return `<div class=\"hogshead-live-ticker-track\">${itemMarkup}${itemMarkup}</div>`;
    };

    const upgradeTicker = () => {
      const frame = document.getElementById("hti-market-globe-frame") as HTMLIFrameElement | null;
      const doc = frame?.contentDocument || frame?.contentWindow?.document;
      if (!doc?.body || doc.body.dataset.hogsheadTickerFixed === "true") return;

      doc.body.dataset.hogsheadTickerFixed = "true";

      const style = doc.createElement("style");
      style.textContent = `
        .ticker {
          position: fixed !important;
          left: 24px !important;
          right: 24px !important;
          bottom: 18px !important;
          z-index: 60 !important;
          min-height: 52px !important;
          display: grid !important;
          grid-template-columns: 205px minmax(0, 1fr) !important;
          align-items: center !important;
          overflow: hidden !important;
          border-radius: 999px !important;
          border: 1px solid rgba(232,168,56,.34) !important;
          background:
            linear-gradient(90deg, rgba(5,10,18,.96), rgba(7,35,46,.94) 50%, rgba(5,10,18,.96)),
            radial-gradient(circle at 16% 50%, rgba(232,168,56,.18), transparent 30%) !important;
          box-shadow:
            0 20px 80px rgba(0,0,0,.50),
            inset 0 1px 0 rgba(255,255,255,.10),
            inset 0 0 0 1px rgba(255,255,255,.05) !important;
          backdrop-filter: blur(24px) saturate(145%) !important;
        }

        .ticker-label {
          height: 100% !important;
          display: flex !important;
          align-items: center !important;
          padding: 0 24px !important;
          color: #E8A838 !important;
          font-size: 11px !important;
          font-weight: 900 !important;
          letter-spacing: .22em !important;
          text-transform: uppercase !important;
          border-right: 1px solid rgba(232,168,56,.24) !important;
          background: linear-gradient(90deg, rgba(232,168,56,.11), rgba(232,168,56,0)) !important;
          white-space: nowrap !important;
        }

        .ticker-track {
          position: relative !important;
          height: 100% !important;
          overflow: hidden !important;
          display: flex !important;
          align-items: center !important;
          min-width: 0 !important;
        }

        .ticker-status { display: none !important; }
        .ticker-item { display: none !important; }

        .hogshead-live-ticker-track {
          display: flex !important;
          width: max-content !important;
          gap: 38px !important;
          align-items: center !important;
          white-space: nowrap !important;
          animation: hogsheadTickerMarquee 46s linear infinite !important;
          will-change: transform !important;
        }

        .hogshead-live-ticker-track:hover {
          animation-play-state: paused !important;
        }

        .hogshead-live-ticker-item {
          display: inline-flex !important;
          align-items: center !important;
          gap: 10px !important;
          color: rgba(255,255,255,.94) !important;
          font-size: 13px !important;
          font-weight: 800 !important;
          letter-spacing: .01em !important;
          text-shadow: 0 8px 22px rgba(0,0,0,.42) !important;
        }

        .hogshead-live-ticker-item::before {
          content: '' !important;
          width: 7px !important;
          height: 7px !important;
          border-radius: 999px !important;
          background: #E8A838 !important;
          box-shadow: 0 0 18px rgba(232,168,56,.76) !important;
          flex: 0 0 auto !important;
        }

        @keyframes hogsheadTickerMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (max-width: 980px) {
          .ticker {
            left: 10px !important;
            right: 10px !important;
            bottom: 10px !important;
            grid-template-columns: 1fr !important;
            border-radius: 24px !important;
            min-height: 48px !important;
          }
          .ticker-label { display: none !important; }
        }
      `;

      doc.head.appendChild(style);

      const ticker = doc.querySelector(".ticker") as HTMLElement | null;
      if (!ticker) return;

      const label = ticker.querySelector(".ticker-label") as HTMLElement | null;
      if (label) label.textContent = "Live Market Signals";

      let track = ticker.querySelector(".ticker-track") as HTMLElement | null;
      if (!track) {
        track = doc.createElement("div");
        track.className = "ticker-track";
        ticker.appendChild(track);
      }

      track.innerHTML = buildTickerHTML();
    };

    const frame = document.getElementById("hti-market-globe-frame") as HTMLIFrameElement | null;
    frame?.addEventListener("load", upgradeTicker);

    const timers = [300, 900, 1800, 3000].map((delay) => window.setTimeout(upgradeTicker, delay));

    return () => {
      frame?.removeEventListener("load", upgradeTicker);
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <section id="market" className="market-globe-section market-gateway-section">
      <div className="market-globe-heading market-gateway-heading">
        <div className="market-gateway-title">
          <p className="market-globe-kicker market-gateway-kicker">Market Intelligence</p>
          <h2>Tequila is global. The economics are concentrated.</h2>
        </div>

        <div className="market-gateway-copy">
          <p className="market-gateway-lede">
            Mexico anchors origin. North America concentrates demand. Premiumization is the upside layer that makes aged inventory commercially valuable.
          </p>

          <div className="market-gateway-chips" aria-label="Market intelligence themes">
            <span className="market-gateway-chip">Origin</span>
            <span className="market-gateway-chip">Demand</span>
            <span className="market-gateway-chip">Premiumization</span>
            <span className="market-gateway-chip">Global Scale</span>
          </div>
        </div>
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
