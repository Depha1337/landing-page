import { Link } from "@tanstack/react-router";
import { LINKS } from "@/lib/constants";
import { LogoWord } from "@/components/ui-bits";

const productLinks = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
];

const legalLinks = [
  { label: "Privacy policy", href: LINKS.privacy },
  { label: "Terms of service", href: LINKS.terms },
  { label: "Data deletion", href: LINKS.dataDeletion },
];

export function Footer() {
  return (
    <footer className="relative mt-20" style={{ backgroundColor: "#0a1120" }}>
      <div
        className="h-px w-full"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, #06b6d4, #7c3aed, transparent)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <LogoWord className="h-10" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              ViralEngine is a cleaner operating system for planning, drafting, scheduling, and
              improving social content without outsourcing the whole workflow.
            </p>
          </div>

          <div>
            <h4 className="overline text-text-strong-muted">Product</h4>
            <ul className="mt-4 space-y-3">
              {productLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-text-muted transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="overline text-text-strong-muted">Legal</h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-text-muted transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="overline text-text-strong-muted">Support</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={LINKS.support}
                  className="text-sm text-text-muted transition-colors hover:text-white"
                >
                  support@viralengineapp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 text-center text-sm text-text-muted">
          2026 ViralEngine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
