"use client";

import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/#home"
          className="font-mono text-sm font-bold text-accent transition-colors hover:text-accent-alt"
        >
          ~/0xkaushal
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("/#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-accent ${
                  activeSection === sectionId
                    ? "text-foreground font-medium"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("/#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm transition-colors hover:text-accent ${
                    activeSection === sectionId
                      ? "text-foreground font-medium"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
