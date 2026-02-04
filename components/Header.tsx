"use client";

import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import { translations } from "@/lib/i18n";
import { useLang } from "./LanguageProvider";

export default function Header() {
  const { lang } = useLang();
  const t = translations[lang].header;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "inherit",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          <img
            src="/brand/logo.jpg"
            alt="Planteptis AI"
            width={56}
            height={56}
            style={{
              borderRadius: 14,
              background: "#ffffff",
              padding: 6,
              border: "1px solid rgba(12,27,23,0.12)",
              display: "block",
            }}
          />
          <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.01em" }}>
            Planteptis AI
          </span>
        </Link>

        <div className="header-right">
          <LanguageSwitch />
          <nav className="nav">
            <Link href="/product" className="nav-link">
              {t.product}
            </Link>
            <Link href="/how-it-works" className="nav-link">
              {t.how}
            </Link>
            <Link href="/pricing" className="nav-link">
              {t.pricing}
            </Link>
            <Link href="/contact" className="nav-link">
              {t.contact}
            </Link>
            <Link href="/contact#shop-form" className="nav-cta">
              {t.shop}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
