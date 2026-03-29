"use client"

import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/SectionTitle'
import { PricingCard } from '@/components/PricingCard'
import { URLS } from '@/lib/constants'

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'STARTER',
      price: '$0',
      description: 'Free forever. Start publishing before you ever enter a card.',
      features: [
        '10 monthly AI credits',
        '3GB media storage',
        'Weekly reports not included',
        'All core publishing features',
        'No card required',
      ],
      ctaText: 'Start free',
    },
    {
      name: 'CREATOR',
      price: '$29',
      description: 'Same feature set, more capacity for steady weekly output.',
      features: [
        '50 monthly AI credits',
        '50GB media storage',
        'Weekly reports included',
        'All core publishing features',
      ],
      ctaText: 'Choose Creator',
      popular: true,
    },
    {
      name: 'PRO',
      price: '$49',
      description: 'Built for growing teams that need higher AI throughput.',
      features: [
        '150 monthly AI credits',
        '200GB media storage',
        'Weekly reports included',
        'All core publishing features',
      ],
      ctaText: 'Choose Pro',
    },
    {
      name: 'BUSINESS',
      price: '$89',
      description: 'Highest AI capacity for advanced operators and teams.',
      features: [
        '500 monthly AI credits',
        '500GB media storage',
        'Weekly reports included',
        'All core publishing features',
      ],
      ctaText: 'Choose Business',
    },
  ]

  const comparisonFeatures = [
    { name: 'Monthly AI credits', starter: '10', creator: '50', pro: '150', business: '500' },
    { name: 'Media storage', starter: '3GB', creator: '50GB', pro: '200GB', business: '500GB' },
    { name: 'Weekly reports', starter: false, creator: true, pro: true, business: true },
    { name: 'All core publishing features', starter: true, creator: true, pro: true, business: true },
    { name: '14-day free trial (no card)', starter: 'Forever free', creator: true, pro: true, business: true },
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#f97316]/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Simple pricing. Real savings.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Start free, upgrade when you are ready, and keep full control without agency contracts.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                period="/mo"
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                ctaText={plan.ctaText}
              />
            ))}
          </div>

          {/* Pricing Note */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Annual billing saves 15%. No contracts. Cancel anytime.
            </p>
          </div>

          {/* Start Free Now Button */}
          <div className="mt-8 flex justify-end">
            <Button
              className="shimmer-button text-primary-foreground font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a
                href={URLS.signup}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start free now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Compare plans" subtitle="See what's included in each plan." />

          <div className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-muted-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Creator</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#f97316]">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm text-foreground">{feature.name}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.starter === 'boolean' ? (
                        feature.starter ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{feature.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      {typeof feature.creator === 'boolean' ? (
                        feature.creator ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-foreground font-medium">{feature.creator}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{feature.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof feature.business === 'boolean' ? (
                        feature.business ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{feature.business}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Pricing FAQs" subtitle="Common questions about our pricing." />

          <div className="mt-16 max-w-3xl mx-auto grid gap-6">
            {[
              {
                q: 'Can I change plans at any time?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll adjust billing accordingly.',
              },
              {
                q: 'Is there a free trial for paid plans?',
                a: 'Absolutely! Every paid plan comes with a 14-day free trial. No credit card required to start with Starter or try any paid tier.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal for recurring billing.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 30-day money-back guarantee on all plans. If you\'re not satisfied, we\'ll refund your payment in full.',
              },
              {
                q: 'What happens if I exceed my AI credits?',
                a: 'We\'ll notify you when you\'re approaching your limit. You can upgrade your plan anytime to get more credits, or purchase add-on credits.',
              },
              {
                q: 'Is annual billing worth it?',
                a: 'Yes! Annual billing saves you 15% compared to monthly billing. You can cancel anytime with no penalty.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
              Ready to take control of your social strategy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl text-pretty">
              Start with Starter for free, or jump straight to Creator for advanced features and more AI capacity.
            </p>
            <Button
              size="lg"
              className="shimmer-button text-primary-foreground font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a
                href={URLS.signup}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get started free
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
