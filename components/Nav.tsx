"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Emblem from "./Emblem";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/defense-systems", label: "Defense Systems" },
  { href: "/security", label: "Security" },
  { href: "/demo-console", label: "Console" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-arc/15 bg-void/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Emblem />
          <span className="font-display text-sm font-bold sm:text-lg tracking-[0.08em] text-white">KAISEN ARCANE SYSTEMS</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link ${path === l.href ? "nav-active" : ""}`}>{l.label}</Link>
          ))}
          <Link href="/login" className="btn-ghost ml-3 !px-4 !py-2 text-sm">Operator login</Link>
        </nav>
        <button className="rounded border border-arc/30 px-3 py-2 text-sm text-arc md:hidden" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-arc/15 bg-void/95 px-5 py-3 md:hidden" aria-label="Mobile">
          {[...links, { href: "/login", label: "Operator login" }].map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link block">{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
