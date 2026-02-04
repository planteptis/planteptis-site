"use client";

import { translations } from "@/lib/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function PricingPage() {
  const { lang } = useLang();
  const t = translations[lang].pricing;
  const pricingCardsLift = 60; // больше число = выше, меньше = ниже

  return (
    <main>
      <section className="section" style={{ background: "#f9f6f0" }}>
        <div className="container">
          <div className="eyebrow">{t.eyebrow}</div>
          <h1 className="display">{t.title}</h1>
          <p className="p" style={{ maxWidth: 680 }}>
            {t.description}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2" style={{ marginTop: -pricingCardsLift }}>
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
              <div style={{ fontSize: 22, fontWeight: 800 }}>{t.standard.name}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#1b7c4c" }}>{t.standard.price}</div>
            </div>

            <ul style={{ marginTop: 12, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
              {t.standard.features.map((item) => (
                <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: "#1b7c4c", fontWeight: 900 }}>•</span>
                  <span className="p" style={{ fontSize: 14 }}>{item}</span>
                </li>
              ))}
            </ul>

            <a className="btn primary" href="/contact#shop-form" style={{ marginTop: 16 }}>
              {t.cta}
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
              <div style={{ fontSize: 22, fontWeight: 800 }}>{t.advanced.name}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#1b7c4c" }}>{t.advanced.price}</div>
            </div>

            <ul style={{ marginTop: 12, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
              {t.advanced.features.map((item) => (
                <li key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: "#1b7c4c", fontWeight: 900 }}>•</span>
                  <span className="p" style={{ fontSize: 14 }}>{item}</span>
                </li>
              ))}
            </ul>

            <a className="btn primary" href="/contact#shop-form" style={{ marginTop: 16 }}>
              {t.cta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
