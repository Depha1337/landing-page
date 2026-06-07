import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, LINKS } from "@/lib/constants";
import { LogoWord } from "@/components/ui-bits";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(15,23,42,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center" aria-label="ViralEngine home">
          <LogoWord className="h-9 transition-transform duration-300 hover:scale-105" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-sm font-medium text-text-muted transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-teal transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={LINKS.login}
            className="rounded-full px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:text-white"
          >
            Log in
          </a>
          <a
            href={LINKS.signup}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2.5 text-sm font-bold text-white transition-all hover:shadow-[0_0_20px_rgba(13,148,136,0.5)]"
            style={{ backgroundImage: "linear-gradient(100deg, #0d9488, #06b6d4)" }}
          >
            Start free trial
          </a>
        </div>

        <button
          className="md:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border md:hidden"
            style={{ backgroundColor: "rgba(15,23,42,0.97)", backdropFilter: "blur(12px)" }}
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-text-muted hover:bg-surface hover:text-white"
                  activeProps={{ className: "text-white" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <a href={LINKS.login} className="rounded-lg px-3 py-3 text-base font-medium text-text-muted">
                Log in
              </a>
              <a
                href={LINKS.signup}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full px-5 py-3 text-center text-sm font-bold text-white"
                style={{ backgroundImage: "linear-gradient(100deg, #0d9488, #06b6d4)" }}
              >
                Start free trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
