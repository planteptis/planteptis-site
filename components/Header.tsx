import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          Planteptis AI
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link href="/product" className="hover:text-black">
            Product
          </Link>
          <Link href="/how-it-works" className="hover:text-black">
            How it works
          </Link>
          <Link href="/pricing" className="hover:text-black">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-full bg-black px-4 py-2 text-sm text-white"
        >
          Get a demo
        </Link>
      </div>
    </header>
  );
}
