export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Pricing
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-gray-600">
        Choose a setup that fits your space. (You can change prices later.)
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          ["Home", "Best for apartments & kitchens", "$—"],
          ["Office", "Best for teams & lounges", "$—"],
          ["Pro", "For cafés / studios / premium", "$—"],
        ].map(([name, desc, price]) => (
          <div key={name} className="rounded-3xl border bg-white p-8">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="mt-2 text-gray-600">{desc}</p>
            <p className="mt-6 text-3xl font-semibold">{price}</p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white"
            >
              Request quote
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
