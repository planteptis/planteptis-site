import { defaultLang, type Lang } from "./i18n";

export function getLangFromCookies(): Lang {
  return defaultLang;
}
