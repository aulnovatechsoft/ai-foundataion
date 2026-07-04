import { useState } from "react";
import { Link } from "wouter";
import { Show } from "@clerk/react";
import { Sparkles, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Support", href: "/support" },
];

export function MarketingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--surface))/0.8] backdrop-blur-xl sticky top-0 z-50">
      <div className="h-20 flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center shadow-[0_0_20px_hsl(var(--accent)/0.3)] group-hover:shadow-[0_0_25px_hsl(var(--accent)/0.5)] transition-all duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tight font-heading text-[hsl(var(--text))]">Upskil OS</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden md:flex items-center gap-2 md:gap-6">
            <Show when="signed-in">
              <Link
                href="/dashboard"
                className="bg-[hsl(var(--text))] hover:opacity-90 text-[hsl(var(--bg))] px-5 md:px-7 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Dashboard
              </Link>
            </Show>
            <Show when="signed-out">
              <Link
                href="/sign-in"
                className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] font-medium transition-colors px-4 py-2"
              >
                Sign In
              </Link>
              <Link
                href="/quiz"
                className="bg-[hsl(var(--text))] hover:opacity-90 text-[hsl(var(--bg))] px-5 md:px-7 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Start Now
              </Link>
            </Show>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[hsl(var(--text))] hover:bg-[hsl(var(--surface-2))] transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="md:hidden border-t border-[hsl(var(--border))] px-6 py-4 flex flex-col gap-1 bg-[hsl(var(--surface))]"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[hsl(var(--text))] font-medium py-3 border-b border-[hsl(var(--border))/0.5]"
            >
              {link.label}
            </Link>
          ))}
          <Show when="signed-in">
            <Link
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="mt-3 text-center bg-[hsl(var(--text))] text-[hsl(var(--bg))] px-6 py-3 rounded-full font-bold"
            >
              Dashboard
            </Link>
          </Show>
          <Show when="signed-out">
            <Link
              href="/sign-in"
              onClick={() => setMenuOpen(false)}
              className="text-[hsl(var(--text-muted))] font-medium py-3"
            >
              Sign In
            </Link>
            <Link
              href="/quiz"
              onClick={() => setMenuOpen(false)}
              className="mt-1 text-center bg-[hsl(var(--text))] text-[hsl(var(--bg))] px-6 py-3 rounded-full font-bold"
            >
              Start Now
            </Link>
          </Show>
        </nav>
      )}
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--surface))/0.5] px-6 md:px-12 py-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-2))] to-[hsl(var(--accent))] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight font-heading text-[hsl(var(--text))]">Upskil OS</span>
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))] text-sm font-medium transition-colors"
          >
            Get Started
          </Link>
        </nav>
        <p className="text-sm text-[hsl(var(--text-muted))]">
          © {new Date().getFullYear()} Upskil OS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-[hsl(var(--bg))] flex flex-col font-sans overflow-x-hidden selection:bg-[hsl(var(--accent))] selection:text-white">
      <MarketingHeader />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </div>
  );
}
