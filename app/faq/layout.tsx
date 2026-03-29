import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about EmberForge. Learn about getting started, billing, features, and support.',
  openGraph: {
    title: 'FAQ | EmberForge',
    description: 'Frequently asked questions about EmberForge.',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
