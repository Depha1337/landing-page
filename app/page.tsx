"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Calendar,
  Sparkles,
  Users,
  BarChart3,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/SectionTitle'
import { FeatureCard } from '@/components/FeatureCard'
import { PricingCard } from '@/components/PricingCard'
import { URLS, APP_URL } from '@/lib/constants'

// Animated counter component
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="font-mono">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// FAQ Accordion Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-card hover:bg-accent/50 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 md:p-5 pt-0 text-muted-foreground text-sm leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  )
}

// Timeline Step
function TimelineStep({
  number,
  title,
  description,
  isLast = false,
  ember = false,
}: {
  number: number
  title: string
  description: string
  isLast?: boolean
  ember?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      className="relative flex gap-4 md:gap-6"
    >
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm md:text-base border-2 ${ember ? 'bg-[#f97316]/20 border-[#f97316] text-[#f97316]' : 'bg-primary/20 border-primary text-primary'}`}>
          {number}
        </div>
        {!isLast && (
          <div className={`w-0.5 h-full min-h-[60px] mt-2 ${ember ? 'bg-gradient-to-b from-[#f97316] to-[#f97316]/20' : 'bg-gradient-to-b from-primary to-primary/20'}`} />
        )}
      </div>
      <div className="pb-8 md:pb-12">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Persona Card
function PersonaCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl bg-card border-l-4 border-l-[#f97316] border border-border"
    >
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function HomePage() {
  const features = [
    {
      icon: Calendar,
      title: 'Visual Content Calendar',
      description: 'Drag-and-drop scheduling with a beautiful calendar view. Plan weeks of content in minutes.',
    },
    {
      icon: Sparkles,
      title: 'AI Content Generation',
      description: 'Generate captions, hashtags, and full posts using AI trained on top-performing social content.',
    },
    {
      icon: Users,
      title: 'Multi-Account Management',
      description: 'Connect unlimited accounts across Instagram, TikTok, Twitter, LinkedIn, and more.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track engagement, growth, and performance across all platforms in one unified view.',
    },
    {
      icon: Zap,
      title: 'Auto-Scheduling',
      description: 'Let AI pick the optimal posting times based on when your audience is most active.',
    },
    {
      icon: Shield,
      title: 'Team Collaboration',
      description: 'Invite team members, set permissions, and review content before it goes live.',
    },
  ]

  const pricingPlans = [
    {
      name: 'STARTER',
      price: '$0',
      description: 'Free forever. Start publishing before you ever enter a card.',
      features: ['10 monthly AI credits', '3GB media storage', 'Weekly reports not included', 'All core publishing features', 'No card required'],
      ctaText: 'Start free',
    },
    {
      name: 'CREATOR',
      price: '$29',
      description: 'Same feature set, more capacity for steady weekly output.',
      features: ['50 monthly AI credits', '50GB media storage', 'Weekly reports included', 'All core publishing features'],
      popular: true,
      ctaText: 'Choose Creator',
    },
    {
      name: 'PRO',
      price: '$49',
      description: 'Built for growing teams that need higher AI throughput.',
      features: ['150 monthly AI credits', '200GB media storage', 'Weekly reports included', 'All core publishing features'],
      ctaText: 'Choose Pro',
    },
    {
      name: 'BUSINESS',
      price: '$89',
      description: 'Highest AI capacity for advanced operators and teams.',
      features: ['500 monthly AI credits', '500GB media storage', 'Weekly reports included', 'All core publishing features'],
      ctaText: 'Choose Business',
    },
  ]

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'Start with a 14-day free trial on any plan. No credit card required. You get full access to all features during the trial period.',
    },
    {
      question: 'Can I switch plans later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
    },
    {
      question: 'Which social platforms do you support?',
      answer: 'We support Instagram, TikTok, Twitter/X, LinkedIn, Facebook, Pinterest, YouTube, and Threads. More platforms are added regularly.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We use bank-level encryption, are SOC 2 compliant, and never store your social media passwords. Your data is always yours.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee on all annual plans. Monthly plans can be cancelled anytime with no penalty.',
    },
  ]

  const personas = [
    {
      title: 'Solo Creators',
      description: 'Spend less time scheduling, more time creating. Automate your posting and focus on what you do best.',
    },
    {
      title: 'Small Businesses',
      description: 'Maintain a consistent social presence without hiring a dedicated social media manager.',
    },
    {
      title: 'Marketing Agencies',
      description: 'Manage all your clients from one dashboard. White-label reports and team collaboration built in.',
    },
    {
      title: 'Enterprise Teams',
      description: 'Enterprise-grade security, custom integrations, and dedicated support for large organizations.',
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f97316]/15 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <div className="badge-gradient">
              <div className="badge-inner text-primary">
                <Sparkles className="w-4 h-4 spin-slow text-[#f97316]" />
                AI-Powered Social Media Automation
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl text-balance">
              Schedule, automate, and{' '}
              <span className="gradient-text">grow your social presence</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              The all-in-one platform for creators and agencies. Manage multiple accounts, AI-generate content, and scale engagement without hiring more staff.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
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
                  Start for free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg"
                asChild
              >
                <Link href="/features">
                  See all features
                </Link>
              </Button>
            </div>

            {/* Trust line */}
            <p className="text-muted-foreground text-sm mt-8">
              No card required. Trusted by <span className="text-[#f97316] font-semibold">10,000+</span> creators and agencies worldwide
            </p>
          </motion.div>

          {/* Floating dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 md:mt-20 relative"
          >
            <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-sm p-2 shadow-2xl shadow-primary/10">
              <div className="rounded-lg bg-card border border-border overflow-hidden">
                {/* Mock dashboard header */}
                <div className="flex items-center gap-2 p-3 border-b border-border bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                      {APP_URL.replace('https://', '')}
                    </div>
                  </div>
                </div>
                {/* Mock dashboard content */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-sm text-muted-foreground mb-1">Scheduled Posts</div>
                    <div className="text-2xl font-bold text-foreground">
                      <AnimatedCounter target={247} />
                    </div>
                    <div className="text-xs text-[#f97316] mt-1">+12% this week</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-sm text-muted-foreground mb-1">Total Reach</div>
                    <div className="text-2xl font-bold text-foreground">
                      <AnimatedCounter target={1200000} suffix="+" />
                    </div>
                    <div className="text-xs text-[#f97316] mt-1">+34% this month</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-sm text-muted-foreground mb-1">Engagement Rate</div>
                    <div className="text-2xl font-bold text-foreground">
                      <AnimatedCounter target={8} suffix="%" />
                    </div>
                    <div className="text-xs text-primary mt-1">Above industry avg</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-[#f97316]/15 to-primary/20 rounded-2xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Your First 15 Minutes Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Quick Start"
            title="Your first 15 minutes"
            subtitle="Get from zero to scheduled content faster than you can order coffee."
          />

          <div className="mt-16 max-w-2xl mx-auto">
            <TimelineStep
              number={1}
              title="Connect your accounts"
              description="Link your Instagram, TikTok, Twitter, and other social accounts with one-click OAuth. No passwords stored."
            />
            <TimelineStep
              number={2}
              title="Import or create content"
              description="Upload your media library or use our AI to generate captions, hashtags, and even images."
              ember
            />
            <TimelineStep
              number={3}
              title="Set your schedule"
              description="Use our AI-recommended times or set your own. Drag and drop to rearrange your content calendar."
            />
            <TimelineStep
              number={4}
              title="Sit back and grow"
              description="Your content posts automatically. Watch your analytics climb while you focus on creating."
              isLast
              ember
            />
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Save Money"
            title="Why pay agency prices?"
            subtitle="Get the same results at a fraction of the cost."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Agency Cost */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-xl bg-card border border-border"
            >
              <div className="text-muted-foreground text-sm font-medium mb-4">Typical Agency Cost</div>
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">$3,000+</div>
              <div className="text-muted-foreground text-sm">/month for basic management</div>
              <ul className="mt-6 flex flex-col gap-3 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Slow turnaround times
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4" /> Limited revision rounds
                </li>
                <li className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" /> Generic strategies
                </li>
              </ul>
            </motion.div>

            {/* EmberForge Cost */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-xl bg-card border-2 border-primary glow-green"
            >
              <div className="text-primary text-sm font-medium mb-4">EmberForge Pro</div>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">$49</div>
              <div className="text-muted-foreground text-sm">/month for everything</div>
              <ul className="mt-6 flex flex-col gap-3 text-foreground text-sm">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" /> 150 monthly AI credits
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" /> 200GB media storage
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" /> Weekly reports included
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Features"
            title="Everything you need to dominate social"
            subtitle="Powerful tools that work together seamlessly."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                ember={index === 1 || index === 4}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/features">
                See all features
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Who It's For"
            title="Built for everyone who creates"
            subtitle="From solo creators to enterprise teams."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personas.map((persona, index) => (
              <PersonaCard
                key={index}
                title={persona.title}
                description={persona.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Pricing"
            title="Simple pricing. Real savings."
            subtitle="Start free, upgrade when you are ready, and keep full control without agency contracts."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                {...plan}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">
                Compare all plans
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FAQ"
            title="Questions people ask first"
            subtitle="Quick answers to common questions."
          />

          <div className="mt-16 max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/faq">
                View all FAQs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background glow */}
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
              Ready to transform your social media game?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl text-pretty">
              Join 10,000+ creators and agencies who are already growing faster with EmberForge.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
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
                  Start for free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              No card required. Annual billing saves 15%.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
