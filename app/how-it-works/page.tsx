"use client";

import { translations } from "@/lib/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function HowItWorksPage() {
  const { lang } = useLang();
  const t = translations[lang].how;

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
        <div className="container grid grid-2">
          {t.steps.map(([n, title, desc]) => (
            <div key={title} className="card">
              <div style={{ fontWeight: 800, color: "rgba(12,27,23,0.5)" }}>{n}</div>
              <div style={{ fontWeight: 800, marginTop: 10 }}>{title}</div>
              <p className="p" style={{ fontSize: 15, marginTop: 8 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "#f2f7f3" }}>
        <div className="container split">
          <div>
            <h2 className="h2">{t.supportTitle}</h2>
            <p className="p">{t.supportDesc}</p>
            <ul style={{ marginTop: 16, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
              {t.supportList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="image-frame">
            <img
              src="/jack.png"
              alt="Growing greens"
            />
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
              <a className="btn ghost" href="/product">
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
