"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about", id: "about" },
    { label: "Programs", href: "/programs", id: "programs" },
    { label: "Trainers", href: "/coaches", id: "trainers" },
    { label: "Classes", href: "/classes", id: "classes" },
    { label: "Pricing", href: "/pricing", id: "pricing" },
    { label: "Gallery", href: "/gallery", id: "gallery" },
    { label: "Contact", href: "/contact", id: "contact" },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300">
        <div className="container-max">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-black tracking-wider uppercase">
                Kech <span className="text-amber-500">Fitness</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-amber-500 transition-colors text-xs font-bold uppercase tracking-widest"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-amber-600"
              >
                Join Now
              </Link>
            </div>

            {/* Right Icons and Mobile Menu Button */}
            <div className="flex items-center gap-6">
              {/* Desktop Icons */}

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white/80 hover:text-amber-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <FontAwesomeIcon
                  icon={isMobileMenuOpen ? faTimes : faBars}
                  size="lg"
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 py-6 px-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-amber-500 transition-colors py-2 font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-amber-600"
                >
                  Join Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Dot Navigation Sidebar */}
    </>
  );
}
