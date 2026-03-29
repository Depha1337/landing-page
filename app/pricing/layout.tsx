import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple pricing with real savings. Start free with no credit card required, then scale to Creator, Pro, or Business plans as you grow.',
  openGraph: {
    title: 'Pricing | EmberForge',
    description: 'Simple pricing with real savings. Start free with no credit card required.',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
