"use client"

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { URLS } from '@/lib/constants'

interface PricingCardProps {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
  ctaHref?: string
  className?: string
}

export function PricingCard({
  name,
  price,
  period = '/mo',
  description,
  features,
  popular = false,
  ctaText = 'Get started',
  ctaHref = URLS.signup,
  className,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300',
        popular
          ? 'bg-card border-primary shadow-lg shadow-primary/10'
          : 'bg-card border-border hover:border-primary/50',
        className
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#f97316] text-white shadow-lg shadow-[#f97316]/30">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl md:text-5xl font-bold text-foreground">{price}</span>
        {price !== 'Custom' && (
          <span className="text-muted-foreground text-sm">{period}</span>
        )}
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          'w-full',
          popular
            ? 'shimmer-button text-primary-foreground'
            : 'bg-accent text-foreground hover:bg-accent/80'
        )}
        asChild
      >
        <a href={ctaHref} target="_blank" rel="noopener noreferrer">
          {ctaText}
        </a>
      </Button>
    </motion.div>
  )
}
