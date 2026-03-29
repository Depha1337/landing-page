import Link from 'next/link'
import Image from 'next/image'
import { URLS, SUPPORT_EMAIL } from '@/lib/constants'

const footerLinks = {
  product: [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
  ],
  legal: [
    { href: URLS.privacy, label: 'Privacy Policy' },
    { href: URLS.terms, label: 'Terms of Service' },
    { href: URLS.dataDelete, label: 'Data Deletion' },
  ],
  support: [
    { href: `mailto:${SUPPORT_EMAIL}`, label: 'Contact Support', external: true },
    { href: URLS.help, label: 'Help Center' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/emberforge-logo.png"
                alt="EmberForge"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed mb-4">
              Replace the $2k/month agency playbook with one platform. Plan, write, schedule, and analyze your content.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <span>{SUPPORT_EMAIL}</span>
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              {currentYear} EmberForge. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href={URLS.privacy}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Privacy
              </Link>
              <Link
                href={URLS.terms}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
