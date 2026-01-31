export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Planteptis AI. All rights reserved.</p>
          <p className="text-gray-500">Indoor hydroponics for homes & offices.</p>
        </div>
      </div>
    </footer>
  );
}
