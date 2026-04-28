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
      if (!doc?.body) return;

      const ticker = doc.querySelector(".ticker") as HTMLElement | null;
      const tickerTrack = ticker?.querySelector(".ticker-track") as HTMLElement | null;

      // Critical: do not mark as upgraded until the iframe ticker actually exists.
      // The globe file can finish loading after the parent page effect has already fired.
      if (!ticker || !tickerTrack) return;
      if (doc.body.dataset.hogsheadTickerFixed === "true") return;

      const style = doc.createElement("style");
      style.setAttribute("data-hogshead-ticker-style", "true");
      style.textContent = `
        .ticker {
          position: fixed !important;
          left: 22px !important;
          right: 22px !important;
          bottom: 18px !important;
          z-index: 70 !important;
          min-height: 66px !important;
          display: block !important;
          overflow: hidden !important;
          border-radius: 999px !important;
          border: 1px solid rgba(232,168,56,.72) !important;
          background:
            linear-gradient(90deg, rgba(2,7,12,.99), rgba(3,34,42,.98) 46%, rgba(2,7,12,.99)),
            radial-gradient(circle at 16% 50%, rgba(232,168,56,.34), transparent 34%) !important;
          box-shadow:
            0 30px 110px rgba(0,0,0,.74),
            0 0 70px rgba(232,168,56,.20),
            0 -10px 46px rgba(118,212,214,.14),
            inset 0 1px 0 rgba(255,255,255,.18),
            inset 0 0 0 1px rgba(255,255,255,.08) !important;
          backdrop-filter: blur(30px) saturate(175%) !important;
        }

        .ticker::before {
          content: '' !important;
          position: absolute !important;
          inset: 0 !important;
          z-index: 1 !important;
          pointer-events: none !important;
          background:
            linear-gradient(90deg, rgba(232,168,56,.12), transparent 18%, transparent 82%, rgba(118,212,214,.10)),
            repeating-linear-gradient(90deg, rgba(255,255,255,.035), rgba(255,255,255,.035) 1px, transparent 1px, transparent 18px) !important;
        }

        .ticker::after {
          content: '' !important;
          position: absolute !important;
          top: 0 !important;
          bottom: 0 !important;
          left: 0 !important;
          width: 380px !important;
          z-index: 4 !important;
          pointer-events: none !important;
          background: linear-gradient(90deg, rgba(2,7,12,1) 0%, rgba(2,11,16,1) 58%, rgba(3,27,35,.82) 78%, rgba(3,27,35,0) 100%) !important;
        }

        .ticker-label {
          position: absolute !important;
          left: 10px !important;
          top: 9px !important;
          bottom: 9px !important;
          z-index: 8 !important;
          height: auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          min-width: 245px !important;
          padding: 0 26px !important;
          border-radius: 999px !important;
          color: #F7C66B !important;
          font-size: 11px !important;
          font-weight: 950 !important;
          letter-spacing: .24em !important;
          text-transform: uppercase !important;
          border: 1px solid rgba(232,168,56,.50) !important;
          background:
            linear-gradient(135deg, rgba(232,168,56,.26), rgba(232,168,56,.10) 48%, rgba(255,255,255,.06)),
            rgba(5,10,18,.84) !important;
          white-space: nowrap !important;
          text-shadow: 0 0 24px rgba(232,168,56,.46) !important;
          box-shadow: 0 0 34px rgba(232,168,56,.18), inset 0 1px 0 rgba(255,255,255,.16) !important;
        }

        .ticker-track {
          position: absolute !important;
          inset: 0 !important;
          z-index: 2 !important;
          height: 100% !important;
          overflow: hidden !important;
          display: flex !important;
          align-items: center !important;
          min-width: 0 !important;
          padding-left: 390px !important;
          padding-right: 34px !important;
          mask-image: linear-gradient(90deg, transparent 0, black 76px, black calc(100% - 42px), transparent 100%) !important;
          -webkit-mask-image: linear-gradient(90deg, transparent 0, black 76px, black calc(100% - 42px), transparent 100%) !important;
        }

        .ticker-status { display: none !important; }
        .ticker-item { display: none !important; }

        .hogshead-live-ticker-track {
          display: flex !important;
          width: max-content !important;
          gap: 58px !important;
          align-items: center !important;
          white-space: nowrap !important;
          animation: hogsheadTickerMarquee 112s linear infinite !important;
          will-change: transform !important;
        }

        .hogshead-live-ticker-track:hover {
          animation-play-state: paused !important;
        }

        .hogshead-live-ticker-item {
          display: inline-flex !important;
          align-items: center !important;
          gap: 12px !important;
          color: rgba(255,255,255,.98) !important;
          font-size: 13.5px !important;
          font-weight: 850 !important;
          letter-spacing: .01em !important;
          text-shadow: 0 8px 24px rgba(0,0,0,.55) !important;
        }

        .hogshead-live-ticker-item::before {
          content: '' !important;
          width: 7px !important;
          height: 7px !important;
          border-radius: 999px !important;
          background: #E8A838 !important;
          box-shadow: 0 0 18px rgba(232,168,56,.90), 0 0 38px rgba(232,168,56,.36) !important;
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
            border-radius: 24px !important;
            min-height: 54px !important;
          }
          .ticker::after { display: none !important; }
          .ticker-label { display: none !important; }
          .ticker-track {
            padding-left: 18px !important;
            padding-right: 18px !important;
          }
          .hogshead-live-ticker-track {
            animation-duration: 94s !important;
          }
        }
      `;

      doc.head.appendChild(style);
      doc.body.dataset.hogsheadTickerFixed = "true";

      const label = ticker.querySelector(".ticker-label") as HTMLElement | null;
      if (label) label.textContent = "Live Market Signals";

      tickerTrack.innerHTML = buildTickerHTML();
    };

    const frame = document.getElementById("hti-market-globe-frame") as HTMLIFrameElement | null;
    frame?.addEventListener("load", upgradeTicker);

    const interval = window.setInterval(upgradeTicker, 500);
    const stopRetry = window.setTimeout(() => window.clearInterval(interval), 12000);

    return () => {
      frame?.removeEventListener("load", upgradeTicker);
      window.clearInterval(interval);
      window.clearTimeout(stopRetry);
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
