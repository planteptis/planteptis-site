"use client";

import { translations } from "@/lib/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function Home() {
  const { lang } = useLang();
  const t = translations[lang].home;
  const productEyebrowTop = -15; // поднять выше -> больше минус (например -12)
  const productEyebrowSize = 19; // размер текста Product (например 14)

  return (
    <main>
      <section className="hero">
        <div className="hero-bg" />
        <div className="container section hero-grid">
          <div className="hero-copy reveal" style={{ animationDelay: "0.05s" }}>
            <div className="eyebrow">{t.hero.eyebrow}</div>
            <h1 className="display">
              {t.hero.titleLine1}
              <br />
              {t.hero.titleLine2}
            </h1>
            <p className="p">{t.hero.description}</p>
            <div className="btn-row">
              <a className="btn primary" href="/contact#shop-form">
                {t.hero.primaryCta}
              </a>
              <a className="btn ghost" href="/product">
                {t.hero.secondaryCta}
              </a>
            </div>
            <div className="pill-row">
              {t.hero.pills.map((pill) => (
                <span key={pill} className="pill">{pill}</span>
              ))}
            </div>
          </div>

          <div className="hero-media reveal" style={{ animationDelay: "0.15s" }}>
            <div style={{ position: "relative" }}>
              <img
                src="/vertical.png"
                alt="Hydroponic garden"
              />
              <div className="overlay-grid">
                {t.hero.stats.map((stat) => (
                  <div key={stat.label} className="stat">
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sm">
        <div className="container">
          <div className="split">
            <div className="reveal" style={{ animationDelay: "0.05s" }}>
              <div className="eyebrow" style={{ position: "relative", top: -35, fontSize: 19 }}>
                {t.why.eyebrow}
              </div>
              <h2 className="h2">{t.why.title}</h2>
              <p className="p">{t.why.description}</p>
            </div>
            <div className="grid grid-2">
              {t.why.cards.map(([title, desc]) => (
                <div key={title} className="card">
                  <strong style={{ display: "block", marginBottom: 8 }}>{title}</strong>
                  <span className="p" style={{ fontSize: 15 }}>
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f2f7f3" }}>
        <div className="container split">
          <div className="image-frame reveal" style={{ animationDelay: "0.05s" }}>
            <img
              src="https://images.unsplash.com/photo-1485637701894-09ad422f6de6?auto=format&fit=crop&w=1600&q=80"
              alt="Indoor greens"
            />
          </div>
          <div className="reveal" style={{ animationDelay: "0.15s" }}>
            <div
              className="eyebrow"
              style={{ position: "relative", top: productEyebrowTop, fontSize: productEyebrowSize }}
            >
              {t.product.eyebrow}
            </div>
            <h2 className="h2">{t.product.title}</h2>
            <p className="p">{t.product.description}</p>
            <div className="btn-row">
              <a className="btn primary" href="/product">
                {t.product.primaryCta}
              </a>
              <a className="btn ghost" href="/contact#shop-form">
                {t.product.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" style={{ background: "#f9f6f0" }}>
        <div className="container">
          <div className="eyebrow">{t.pricing.eyebrow}</div>
          <h2 className="h2">{t.pricing.title}</h2>
          <p className="p" style={{ maxWidth: 620 }}>
            {t.pricing.description}
          </p>

          <div className="grid grid-2" style={{ marginTop: 24 }}>
            {/* Standard */}
            <div className="card" style={{ background: "#ffffff", border: "1px solid rgba(12,27,23,0.10)", boxShadow: "0 18px 45px rgba(12,27,23,0.08)" }}>
              <div style={{ borderRadius: 20, overflow: "hidden", background: "#f6f6f6", border: "1px solid rgba(12,27,23,0.08)", padding: 16 }}>
                <div style={{ minHeight: 240, display: "grid", placeItems: "center" }}>
                  <img
                    src="/products/standard.jpg"
                    alt="Standard model"
                    style={{ maxWidth: "100%", maxHeight: 220, width: "auto", height: "auto", display: "block" }}
                  />
                </div>
              </div>

              <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontSize: 20, fontWeight: 800 }}>{t.pricing.standard.name}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#1b7c4c" }}>{t.pricing.standard.price}</div>
              </div>

              <ul style={{ marginTop: 12, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
                {t.pricing.standard.features.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#1b7c4c", fontWeight: 900 }}>•</span>
                    <span className="p" style={{ fontSize: 14 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <a className="btn primary" href="/contact#shop-form" style={{ marginTop: 16 }}>
                {t.pricing.cta}
              </a>
            </div>

            {/* Advanced */}
            <div className="card" style={{ background: "#ffffff", border: "1px solid rgba(12,27,23,0.10)", boxShadow: "0 18px 45px rgba(12,27,23,0.08)" }}>
              <div style={{ borderRadius: 20, overflow: "hidden", background: "#f6f6f6", border: "1px solid rgba(12,27,23,0.08)", padding: 16 }}>
                <div style={{ minHeight: 240, display: "grid", placeItems: "center" }}>
                  <img
                    src="/products/advanced.jpg"
                    alt="Advanced model"
                    style={{ maxWidth: "100%", maxHeight: 220, width: "auto", height: "auto", display: "block" }}
                  />
                </div>
              </div>

              <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontSize: 20, fontWeight: 800 }}>{t.pricing.advanced.name}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#1b7c4c" }}>{t.pricing.advanced.price}</div>
              </div>

              <ul style={{ marginTop: 12, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
                {t.pricing.advanced.features.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: "#1b7c4c", fontWeight: 900 }}>•</span>
                    <span className="p" style={{ fontSize: 14 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <a className="btn primary" href="/contact#shop-form" style={{ marginTop: 16 }}>
                {t.pricing.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
