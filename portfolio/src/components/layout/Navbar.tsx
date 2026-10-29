"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, person } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Let keyboard users close the mobile menu with Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const linkClasses =
    "rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/#home" className="text-lg font-bold text-slate-900" onClick={() => setIsOpen(false)}>
          {person.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClasses}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-800 hover:bg-slate-100 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={`block ${linkClasses}`} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
