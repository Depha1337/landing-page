"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/SectionTitle'
import { cn } from '@/lib/utils'
import { URLS, SUPPORT_EMAIL, PRIVACY_EMAIL } from '@/lib/constants'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border rounded-xl overflow-hidden bg-card"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-accent/30 transition-colors"
      >
        <span className="font-medium text-foreground pr-4 text-base md:text-lg">{question}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: 'Getting Started',
      items: [
        {
          question: 'How does the free trial work?',
          answer:
            'Start with a 14-day free trial on any plan. No credit card required. You get full access to all features during the trial period. At the end of your trial, you can choose to subscribe or your account will be paused (your data is safe).',
        },
        {
          question: 'How do I connect my social media accounts?',
          answer:
            'Connecting accounts is simple! Just click "Add Account" in your dashboard, select your platform, and authorize through OAuth. We never see or store your passwords—everything goes through official platform APIs.',
        },
        {
          question: 'Can I import my existing scheduled posts?',
          answer:
            'Yes! If you\'re migrating from another tool, you can import your content calendar via CSV. We also support direct imports from Buffer, Hootsuite, and Later. Contact support if you need help with migration.',
        },
      ],
    },
    {
      category: 'Billing & Plans',
      items: [
        {
          question: 'Can I switch plans at any time?',
          answer:
            'Absolutely! You can upgrade or downgrade your plan at any time from your account settings. When you upgrade, you\'ll get immediate access to new features. When you downgrade, changes take effect on your next billing cycle, and we\'ll prorate any differences.',
        },
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for annual Enterprise plans. All payments are processed securely through Stripe.',
        },
        {
          question: 'Do you offer refunds?',
          answer:
            'We offer a 30-day money-back guarantee on all annual plans—no questions asked. Monthly plans can be cancelled anytime with no penalty. If you\'re not satisfied, just reach out to our support team.',
        },
        {
          question: 'Is there a discount for nonprofits or students?',
          answer:
            'Yes! We offer a 50% discount for verified nonprofits and a 30% discount for students with a valid .edu email. Contact support with proof of status to apply the discount.',
        },
      ],
    },
    {
      category: 'Features & Platforms',
      items: [
        {
          question: 'Which social platforms do you support?',
          answer:
            'We support Instagram (including Reels and Stories), TikTok, Twitter/X, LinkedIn (personal and company pages), Facebook (pages and groups), Pinterest, YouTube, and Threads. We\'re constantly adding more platforms based on user feedback.',
        },
        {
          question: 'How does the AI content generation work?',
          answer:
            'Our AI is trained on millions of high-performing social media posts. You can generate captions, hashtags, and content ideas tailored to your brand voice. Simply describe what you want or let AI analyze your existing content to match your style.',
        },
        {
          question: 'Can I schedule Instagram Reels and Stories?',
          answer:
            'Yes! We fully support Instagram Reels and Stories scheduling. For Stories, you can schedule up to 10 slides at once. Note that due to Instagram API limitations, some features may require you to approve the final post via push notification.',
        },
        {
          question: 'Do you support video content?',
          answer:
            'Absolutely! You can upload and schedule videos for all supported platforms. We support most video formats (MP4, MOV, AVI) and automatically optimize videos for each platform\'s requirements.',
        },
      ],
    },
    {
      category: 'Security & Privacy',
      items: [
        {
          question: 'Is my data secure?',
          answer:
            'Security is our top priority. We use bank-level encryption (AES-256), are SOC 2 Type II compliant, and never store your social media passwords. All data is encrypted in transit and at rest. We also offer two-factor authentication for all accounts.',
        },
        {
          question: 'Do you sell my data?',
          answer:
            'Never. Your data is yours, period. We don\'t sell, rent, or share your personal information or content with third parties. We only use data to provide and improve our services. See our Privacy Policy for full details.',
        },
        {
          question: 'How do I delete my account and data?',
          answer:
            `You can delete your account anytime from Settings > Account > Delete Account. This will permanently remove all your data within 30 days. You can also request a data export before deletion. For GDPR requests, contact ${PRIVACY_EMAIL}.`,
        },
      ],
    },
    {
      category: 'Support',
      items: [
        {
          question: 'How do I get help if I have a problem?',
          answer:
            `We offer multiple support channels! Use the in-app chat for quick questions, email ${SUPPORT_EMAIL} for detailed inquiries, or check our Help Center for tutorials and guides. Pro and Agency plans get priority support with faster response times.`,
        },
        {
          question: 'Do you offer onboarding or training?',
          answer:
            'Yes! All new users get access to our comprehensive onboarding video series. Agency and Enterprise plans include a dedicated onboarding session with our customer success team to help you get the most out of EmberForge.',
        },
        {
          question: 'What are your support hours?',
          answer:
            'Our support team is available Monday to Friday, 9 AM to 6 PM EST for email and chat support. Enterprise plans include 24/7 phone support. Our Help Center and documentation are available anytime.',
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FAQ"
            title="Questions people ask first"
            subtitle="Everything you need to know about EmberForge. Can't find what you're looking for? Contact our support team."
          />
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => {
            // Calculate the starting index for this category
            const startIndex = faqs
              .slice(0, categoryIndex)
              .reduce((acc, cat) => acc + cat.items.length, 0)

            return (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                  {category.category}
                </h2>
                <div className="flex flex-col gap-4">
                  {category.items.map((faq, itemIndex) => {
                    const globalIndex = startIndex + itemIndex
                    return (
                      <FAQItem
                        key={globalIndex}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === globalIndex}
                        onToggle={() =>
                          setOpenIndex(openIndex === globalIndex ? null : globalIndex)
                        }
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Still have questions?
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Our support team is here to help. Reach out anytime and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="shimmer-button text-primary-foreground font-semibold"
                asChild
              >
                <a href={`mailto:${SUPPORT_EMAIL}`}>
                  Contact Support
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a
                  href={URLS.help}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Help Center
                </a>
              </Button>
            </div>
          </motion.div>
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
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl text-pretty">
              Join thousands of creators and agencies who trust EmberForge to grow their social presence.
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
                Start your free trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="text-muted-foreground text-sm">
              14-day free trial. No credit card required.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
