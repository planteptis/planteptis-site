"use client";

import { type Lang } from "@/lib/i18n";
import { useLang } from "./LanguageProvider";

const options: { code: Lang; label: string }[] = [
  { code: "kz", label: "QAZ" },
  { code: "en", label: "ENG" },
  { code: "ru", label: "RUS" },
];

export default function LanguageSwitch() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-switch" role="group" aria-label="Language selector">
      {options.map((opt) => (
        <button
          key={opt.code}
          type="button"
          className={`lang-btn ${lang === opt.code ? "active" : ""}`}
          onClick={() => setLang(opt.code)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
