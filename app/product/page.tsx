export default function ProductPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        The Planteptis System
      </h1>

      <p className="mt-5 max-w-2xl text-lg text-gray-600">
        A clean, compact indoor hydroponics setup designed for homes and offices.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border bg-gray-50 p-8">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gray-200" />
          <p className="mt-4 text-sm text-gray-600">
            Later we’ll replace this block with real product photos.
          </p>
        </div>

        <div className="rounded-3xl border bg-white p-8">
          <h2 className="text-xl font-semibold">What you get</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>Hydroponic growing modules</li>
            <li>Water tank + pump</li>
            <li>LED lighting</li>
            <li>Easy cleaning & refills</li>
            <li>Optional sensors & AI guidance</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact" className="rounded-full bg-black px-6 py-3 text-white">
              Request a demo
            </a>
            <a href="/pricing" className="rounded-full border px-6 py-3">
              See pricing
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
