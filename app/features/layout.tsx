import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover EmberForge features: visual calendar, AI content generation, smart scheduling, analytics dashboard, and multi-platform management.',
  openGraph: {
    title: 'Features | EmberForge',
    description: 'Discover EmberForge features: visual calendar, AI content generation, and more.',
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
