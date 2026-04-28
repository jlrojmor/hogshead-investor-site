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
          id="hti-market-globe-frame"
          src="/HTI_Globe_FINAL.html"
          title="Hogshead Tequila Interactive Market Globe"
          className="market-globe-frame"
          loading="lazy"
        />
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              function patchGlobeFrame() {
                var frame = document.getElementById('hti-market-globe-frame');
                if (!frame || !frame.contentDocument) return;
                var doc = frame.contentDocument;

                var style = doc.getElementById('hti-parent-globe-patch');
                if (!style) {
                  style = doc.createElement('style');
                  style.id = 'hti-parent-globe-patch';
                  style.textContent = [
                    '.brand{padding:8px 16px 8px 8px!important;gap:11px!important}',
                    '.brand-mark{background:#fff!important;overflow:hidden!important;box-shadow:0 0 0 1px rgba(255,255,255,.65),0 0 34px rgba(232,168,56,.24)!important}',
                    '.brand-mark img{width:34px!important;height:34px!important;object-fit:contain!important;display:block!important}',
                    '.brand-text strong{display:none!important}',
                    '.brand-text span{margin-top:0!important;font-size:11px!important;letter-spacing:.20em!important;color:#E8A838!important}',
                    '.left-rail{bottom:152px!important}',
                    '.region-dock{margin-bottom:10px!important}',
                    '.ticker{bottom:20px!important}',
                    '@media(max-height:820px){.left-rail{bottom:176px!important}.ticker{bottom:14px!important}.thesis-card{padding:18px!important}.thesis-card h2{font-size:29px!important}.thesis-card p{font-size:12px!important;line-height:1.55!important}.metric-mini{padding:10px 12px!important}.region-chip{padding:9px 9px!important;font-size:10px!important}}',
                    '@media(max-width:980px){.left-rail{bottom:92px!important}.ticker{bottom:10px!important}}'
                  ].join('');
                  doc.head.appendChild(style);
                }

                var brandMark = doc.querySelector('.brand-mark');
                if (brandMark && !brandMark.querySelector('img')) {
                  brandMark.innerHTML = '<img src="/images/Logo_for_Website.png" alt="Hogshead Tequila" />';
                }

                var brandStrong = doc.querySelector('.brand-text strong');
                if (brandStrong) brandStrong.textContent = '';

                var brandSpan = doc.querySelector('.brand-text span');
                if (brandSpan) brandSpan.textContent = 'Premium Tequila';
              }

              window.addEventListener('load', function () {
                var frame = document.getElementById('hti-market-globe-frame');
                if (!frame) return;
                frame.addEventListener('load', patchGlobeFrame);
                setTimeout(patchGlobeFrame, 400);
                setTimeout(patchGlobeFrame, 1200);
              });
            })();
          `,
        }}
      />
    </section>
  );
}

export default MarketSection;
