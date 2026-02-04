"use client";

import Link from "next/link";
import { translations } from "@/lib/i18n";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang].footer;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="/brand/logo.jpg"
                alt="Planteptis AI"
                width={44}
                height={44}
                style={{
                  borderRadius: 12,
                  background: "#ffffff",
                  padding: 5,
                  border: "1px solid rgba(12,27,23,0.12)",
                  display: "block",
                }}
              />
              <div>
                <div className="footer-brand-title">Planteptis AI</div>
                <div className="p" style={{ fontSize: 14 }}>
                  {t.tagline}
                </div>
              </div>
            </div>

            <div className="p" style={{ fontSize: 14, marginTop: 12 }}>
              {t.location}
            </div>
            <div className="p" style={{ fontSize: 14 }}>hello@planteptis.ai</div>
            <div className="p" style={{ fontSize: 14 }}>+7 (747) 399-03-70</div>
          </div>

          <div className="footer-col">
            <div className="footer-title">{t.product}</div>
            <ul className="footer-links">
              <li>
                <Link className="footer-link" href="/product">{t.links.product}</Link>
              </li>
              <li>
                <Link className="footer-link" href="/how-it-works">{t.links.how}</Link>
              </li>
              <li>
                <Link className="footer-link" href="/pricing">{t.links.pricing}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-title">{t.company}</div>
            <ul className="footer-links">
              <li>
                <Link className="footer-link" href="/contact">{t.links.contact}</Link>
              </li>
              <li><span className="footer-link">{t.links.partnerships}</span></li>
              <li><span className="footer-link">{t.links.press}</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-title">{t.social}</div>

            <div className="footer-social">
              <a
                className="social-btn"
                href="https://www.instagram.com/planteptis.ai?igsh=OTEzMmR2YmFtZXo%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src="/brand/instagram.svg" alt="Instagram" />
              </a>
              <a
                className="social-btn"
                href="https://wa.me/77473990370"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <img src="/brand/whatsapp.svg" alt="WhatsApp" />
              </a>
            </div>

            <a
              className="p footer-handle"
              href="https://www.instagram.com/planteptis.ai?igsh=OTEzMmR2YmFtZXo%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: 14, marginTop: 10, display: "inline-flex" }}
            >
              @planteptis.ai
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Planteptis AI. {t.rights}</span>
          <span>{t.builtIn}</span>
        </div>
      </div>
    </footer>
  );
}
