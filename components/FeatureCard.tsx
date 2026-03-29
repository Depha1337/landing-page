"use client"

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  ember?: boolean
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  ember = false,
}: FeatureCardProps) {
  const accentColor = ember ? '#f97316' : undefined
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'group relative p-6 rounded-xl bg-card border border-border transition-all duration-300',
        ember ? 'hover:border-[#f97316]/50 hover:shadow-lg hover:shadow-[#f97316]/10' : 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5',
        className
      )}
    >
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
        ember ? "bg-gradient-to-br from-[#f97316]/5 to-[#fb923c]/5" : "bg-gradient-to-br from-primary/5 to-secondary/5"
      )} />
      <div className="relative">
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
          ember ? "bg-[#f97316]/10 group-hover:bg-[#f97316]/20" : "bg-primary/10 group-hover:bg-primary/20"
        )}>
          <Icon className={cn("w-6 h-6", ember ? "text-[#f97316]" : "text-primary")} />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
