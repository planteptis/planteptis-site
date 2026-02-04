"use client";

import { translations } from "@/lib/i18n";
import { useLang } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { lang } = useLang();
  const t = translations[lang].contact;
  const contactCardsLift = 70; // выше = больше число
  const shopAnchorOffset = 140; // больше число = ниже прокрутка (чтобы всё видно)

  return (
    <main>
      <section className="section" style={{ background: "#f9f6f0" }}>
        <div className="container split">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h1 className="display">{t.title}</h1>
            <p className="p">{t.description}</p>
            <div className="pill-row">
              {t.pills.map((pill) => (
                <span key={pill} className="pill">{pill}</span>
              ))}
            </div>
          </div>
          <div className="image-frame">
            <img
              src="/shipley.png"
              alt="Green plants"
            />
          </div>
        </div>
      </section>

      <section
        className="section"
        id="shop-form"
        style={{ scrollMarginTop: shopAnchorOffset }}
      >
        <div
          className="container split"
          style={{ alignItems: "stretch", marginTop: -contactCardsLift }}
        >
          <div className="card" style={{ height: "100%" }}>
            <h2 className="h2" style={{ marginTop: 0 }}>
              {t.shopTitle}
            </h2>
            <p className="p" style={{ marginBottom: 18 }}>
              {t.shopDesc}
            </p>

            <form className="form">
              <div className="field">
                <label htmlFor="name">{t.fullName}</label>
                <input id="name" name="name" placeholder={t.fullNamePlaceholder} required />
              </div>
              <div className="field">
                <label htmlFor="email">{t.email}</label>
                <input id="email" name="email" placeholder={t.emailPlaceholder} type="email" required />
              </div>
              <div className="field">
                <label htmlFor="model">{t.model}</label>
                <select id="model" name="model" defaultValue="" required>
                  <option value="" disabled>{t.modelPlaceholder}</option>
                  <option value="Standard">{t.standard}</option>
                  <option value="Advanced">{t.advanced}</option>
                </select>
              </div>
              <button className="btn primary" type="submit">
                {t.send}
              </button>
            </form>

            <div className="p" style={{ marginTop: 12, fontSize: 14 }}>
              {t.phoneLine}
            </div>
          </div>

          <div className="card soft" style={{ height: "100%" }}>
            <h2 className="h2" style={{ marginTop: 0 }}>
              {t.detailsTitle}
            </h2>
            <p className="p">{t.detailsDesc}</p>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontWeight: 700 }}>{t.email}</div>
              <div className="p">hello@planteptis.ai</div>
            </div>
            <div style={{ marginTop: 14 }}>
              <div style={{ fontWeight: 700 }}>{t.phoneLabel}</div>
              <div className="p">+7 (747) 399-03-70</div>
            </div>
            <div style={{ marginTop: 14 }}>
              <div style={{ fontWeight: 700 }}>{t.locationLabel}</div>
              <div className="p">{t.locationValue}</div>
            </div>
            <div style={{ marginTop: 24 }}>
              <div style={{ fontWeight: 700 }}>{t.nextTitle}</div>
              <ul style={{ marginTop: 10, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
                {t.nextList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
