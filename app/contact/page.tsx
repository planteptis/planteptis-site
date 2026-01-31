"use client";
export default function ContactPage() {
  const email = "hello@planteptis.ai"; // поменяешь на свой email
  const subject = encodeURIComponent("Planteptis AI — demo request");

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Contact
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-gray-600">
        Tell us about your space — we’ll reply with a setup recommendation.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <form
          className="rounded-3xl border bg-white p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);

            const name = String(data.get("name") || "");
            const from = String(data.get("email") || "");
            const city = String(data.get("city") || "");
            const grow = String(data.get("grow") || "");

            const body = encodeURIComponent(
              `Name: ${name}\nEmail: ${from}\nCity: ${city}\nWhat I want to grow: ${grow}\n`
            );

            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
          }}
        >
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-xl border px-4 py-3"
            placeholder="Mardan"
          />

          <label className="mt-6 block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border px-4 py-3"
            placeholder="you@email.com"
          />

          <label className="mt-6 block text-sm font-medium">City</label>
          <input
            name="city"
            className="mt-2 w-full rounded-xl border px-4 py-3"
            placeholder="Almaty"
          />

          <label className="mt-6 block text-sm font-medium">What do you want to grow?</label>
          <textarea
            name="grow"
            className="mt-2 w-full rounded-xl border px-4 py-3"
            rows={4}
            placeholder="Salads, herbs, strawberries..."
          />

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-black px-6 py-3 text-white"
          >
            Send request
          </button>
        </form>

        <div className="rounded-3xl border bg-gray-50 p-8">
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="mt-3 text-gray-600">{email}</p>

          <h2 className="mt-10 text-xl font-semibold">What to include</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>Home or office?</li>
            <li>How much free space you have</li>
            <li>What you want to grow</li>
            <li>Your city (for shipping/install)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
