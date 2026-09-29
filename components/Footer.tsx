import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-arc/15 bg-void/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-mist md:flex-row md:items-center md:justify-between">
        <p>© 2026 Kaisen Arcane Systems. Fictional company. Demo target for passive security assessment.</p>
        <div className="flex gap-5">
          <Link href="/health" className="hover:text-arc">Health</Link>
          <Link href="/api/status" className="hover:text-arc">Status API</Link>
          <Link href="/contact" className="hover:text-arc">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
