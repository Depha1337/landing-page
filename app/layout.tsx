import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: 'EmberForge - Social Media Automation Platform',
    template: '%s | EmberForge',
  },
  description: 'Replace the $2k/month agency playbook with one platform. EmberForge plans, writes, schedules, and analyzes your content so you stay consistent without agency retainers.',
  keywords: ['social media automation', 'content scheduling', 'AI content generation', 'social media management', 'creator tools', 'agency tools'],
  authors: [{ name: 'EmberForge' }],
  creator: 'EmberForge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emberforge.io',
    siteName: 'EmberForge',
    title: 'EmberForge - Social Media Automation Platform',
    description: 'Replace the $2k/month agency playbook with one platform.',
    images: [
      {
        url: '/images/emberforge-logo.png',
        width: 1200,
        height: 630,
        alt: 'EmberForge - Social Media Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EmberForge - Social Media Automation',
    description: 'Replace the $2k/month agency playbook with one platform.',
    images: ['/images/emberforge-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground min-h-screen`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
