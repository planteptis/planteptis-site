"use client";

import { translations } from "@/lib/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function ProductPage() {
  const { lang } = useLang();
  const t = translations[lang].product;

  return (
    <main>
      <section className="section" style={{ background: "#f9f6f0" }}>
        <div className="container split">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h1 className="display">{t.title}</h1>
            <p className="p">{t.description}</p>
            <div className="btn-row">
              <a className="btn primary" href="/contact#shop-form">
                {t.primaryCta}
              </a>
              <a className="btn ghost" href="/pricing">
                {t.secondaryCta}
              </a>
            </div>
          </div>
          <div className="image-frame">
            <img
              src="/joshua.png"
              alt="Hydroponic system"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">{t.whatYouGet}</h2>
          <p className="p" style={{ maxWidth: 640 }}>
            {t.whatYouGetDesc}
          </p>
          <div className="grid grid-3" style={{ marginTop: 24 }}>
            {t.cards.map(([title, desc]) => (
              <div key={title} className="card">
                <strong style={{ display: "block", marginBottom: 8 }}>{title}</strong>
                <p className="p" style={{ fontSize: 15 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f2f7f3" }}>
        <div className="container split">
          <div className="card soft">
            <h3 style={{ marginTop: 0 }}>{t.idealFor}</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
              {t.idealForList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>{t.highlights}</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
              {t.highlightsList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section sm">
        <div className="container">
          <div className="card dark" style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>{t.ctaTitle}</div>
              <p className="p" style={{ color: "rgba(244,251,247,0.75)", marginTop: 8 }}>
                {t.ctaDesc}
              </p>
            </div>
            <div className="btn-row" style={{ marginTop: 0 }}>
              <a className="btn primary" href="/contact#shop-form">
                {t.ctaPrimary}
              </a>
              <a className="btn ghost" href="/pricing">
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
