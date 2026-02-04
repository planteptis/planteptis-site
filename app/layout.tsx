import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata = {
  title: "Planteptis AI — Smart Hydroponics",
  description:
    "Smart hydroponics for homes & offices. Grow greens, herbs, fruits, and salads indoors with automated routines.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <LanguageProvider>
          <Header />
          <div className="min-h-[calc(100vh-64px)]">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
