export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium text-gray-500">
          Planteptis AI
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Smart hydroponics for homes & offices
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Grow greens, herbs, fruits, and salads indoors using a clean,
          automated hydroponic system designed for everyday spaces.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-full bg-black px-6 py-3 text-white"
          >
            Request a demo
          </a>

          <a
            href="/product"
            className="rounded-full border px-6 py-3"
          >
            View product
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold">
            Why Planteptis AI
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold">
                Grow year-round
              </h3>
              <p className="mt-2 text-gray-600">
                Fresh greens and herbs all year, regardless of weather.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold">
                Minimal maintenance
              </h3>
              <p className="mt-2 text-gray-600">
                Automated watering, lighting, and nutrient control.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-lg font-semibold">
                Smart & compact
              </h3>
              <p className="mt-2 text-gray-600">
                Designed to fit homes, offices, cafés, and studios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold">
            How it works
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-4">
            <div>
              <span className="text-sm text-gray-500">01</span>
              <h3 className="mt-2 font-semibold">Install system</h3>
              <p className="mt-1 text-gray-600">
                Place the system in your space and connect water & power.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-500">02</span>
              <h3 className="mt-2 font-semibold">Plant seeds</h3>
              <p className="mt-1 text-gray-600">
                Insert seed pods and select plant types.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-500">03</span>
              <h3 className="mt-2 font-semibold">Automated growth</h3>
              <p className="mt-1 text-gray-600">
                AI-guided lighting and nutrients optimize growth.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-500">04</span>
              <h3 className="mt-2 font-semibold">Harvest</h3>
              <p className="mt-1 text-gray-600">
                Enjoy fresh produce directly from your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border bg-white p-10">
            <h2 className="text-2xl font-semibold">
              Ready to grow smarter?
            </h2>

            <p className="mt-3 text-gray-600">
              Tell us about your space and we’ll help you choose the perfect setup.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-white"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
