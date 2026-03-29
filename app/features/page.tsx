"use client"

import { motion } from 'framer-motion'
import {
  Calendar,
  Sparkles,
  BarChart3,
  Zap,
  Users,
  Globe,
  CheckCircle2,
  Shield,
  Clock,
  TrendingUp,
  Instagram,
  Twitter,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Layers,
  MessageSquare,
  Bot,
  Palette,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/SectionTitle'
import { cn } from '@/lib/utils'
import { URLS } from '@/lib/constants'
import { LucideIcon } from 'lucide-react'

interface FeatureSectionProps {
  badge: string
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  reverse?: boolean
  mockup: React.ReactNode
  ember?: boolean
}

function FeatureSection({
  badge,
  title,
  description,
  features,
  icon: Icon,
  reverse = false,
  mockup,
  ember = false,
}: FeatureSectionProps) {
  return (
    <section className={cn('py-20 md:py-32', reverse && 'bg-card/50')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(reverse && 'lg:order-2')}
          >
            <span className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4",
              ember ? "bg-[#f97316]/10 text-[#f97316] border-[#f97316]/20" : "bg-primary/10 text-primary border-primary/20"
            )}>
              <Icon className="w-3 h-3" />
              {badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed text-pretty">
              {description}
            </p>
            <ul className="flex flex-col gap-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                    ember ? "bg-[#f97316]/20" : "bg-primary/20"
                  )}>
                    <div className={cn("w-2 h-2 rounded-full", ember ? "bg-[#f97316]" : "bg-primary")} />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(reverse && 'lg:order-1')}
          >
            <div className={cn(
              "relative rounded-xl border border-border bg-card p-4 shadow-xl",
              ember ? "shadow-[#f97316]/5" : "shadow-primary/5"
            )}>
              {mockup}
              <div className={cn(
                "absolute -inset-4 rounded-2xl blur-2xl -z-10",
                ember ? "bg-gradient-to-br from-[#f97316]/10 to-[#fb923c]/10" : "bg-gradient-to-br from-primary/10 to-secondary/10"
              )} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Mockup Components
function CalendarMockup() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const posts = [
    { day: 1, time: '9:00 AM', platform: 'IG' },
    { day: 2, time: '12:00 PM', platform: 'TW' },
    { day: 3, time: '3:00 PM', platform: 'LI' },
    { day: 4, time: '6:00 PM', platform: 'TT' },
  ]

  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-foreground">March 2026</span>
        <div className="flex gap-1">
          <button className="p-1 rounded hover:bg-muted"><ChevronLeft className="w-4 h-4" /></button>
          <button className="p-1 rounded hover:bg-muted"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-xs text-muted-foreground mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 28 }, (_, i) => {
          const post = posts.find((p) => p.day === i + 1)
          return (
            <div
              key={i}
              className={cn(
                'aspect-square rounded-lg flex flex-col items-center justify-center text-xs',
                post ? 'bg-primary/20 border border-primary/30' : 'bg-muted/50'
              )}
            >
              <span className="text-foreground font-medium">{i + 1}</span>
              {post && (
                <span className="text-[10px] text-primary mt-0.5">{post.platform}</span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AIMockup() {
  return (
    <div className="bg-muted/30 rounded-lg p-4 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 bg-card rounded-lg p-3 border border-border">
          <p className="text-sm text-foreground">
            Here are 3 caption options for your fitness post:
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {['Motivational', 'Educational', 'Fun & Casual'].map((style, i) => (
              <div
                key={i}
                className="p-2 rounded bg-muted/50 text-xs text-muted-foreground border border-transparent hover:border-primary/30 cursor-pointer transition-colors"
              >
                <span className="text-primary font-medium">{style}:</span> Ready to crush your goals? Every rep counts...
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ask AI for more variations..."
          className="flex-1 px-3 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground"
          readOnly
        />
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
          Generate
        </button>
      </div>
    </div>
  )
}

function AnalyticsMockup() {
  const data = [40, 65, 45, 80, 60, 90, 75]

  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-foreground">Engagement Overview</span>
        <span className="text-xs text-[#f97316] bg-[#f97316]/10 px-2 py-1 rounded">+34%</span>
      </div>
      <div className="flex items-end gap-2 h-32 mb-4">
        {data.map((value, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t bg-gradient-to-t from-primary to-secondary transition-all"
              style={{ height: `${value}%` }}
            />
            <span className="text-[10px] text-muted-foreground">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        {[
          { label: 'Impressions', value: '1.2M' },
          { label: 'Engagement', value: '8.4%' },
          { label: 'Followers', value: '+2.3K' },
        ].map((stat, i) => (
          <div key={i} className="p-2 rounded bg-muted/50">
            <div className="text-lg font-bold text-foreground">{stat.value}</div>
            <div className="text-[10px] text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TeamMockup() {
  const members = [
    { name: 'Sarah', role: 'Admin', color: 'bg-primary' },
    { name: 'Mike', role: 'Editor', color: 'bg-secondary' },
    { name: 'Lisa', role: 'Viewer', color: 'bg-chart-3' },
  ]

  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-foreground">Team Members</span>
        <button className="text-xs text-primary">+ Invite</button>
      </div>
      <div className="flex flex-col gap-3">
        {members.map((member, i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
            <div className={cn('w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground', member.color)}>
              {member.name[0]}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">{member.name}</div>
              <div className="text-xs text-muted-foreground">{member.role}</div>
            </div>
            <button className="p-1 rounded hover:bg-muted">
              <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function AutoScheduleMockup() {
  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-primary" />
        <span className="font-semibold text-foreground">Smart Scheduling</span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
          <div className="text-sm font-medium text-foreground mb-1">Optimal Time Found</div>
          <div className="text-2xl font-bold text-primary">Tuesday, 6:30 PM</div>
          <div className="text-xs text-muted-foreground mt-1">94% of your audience is active</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { time: '9:00 AM', score: 72 },
            { time: '12:00 PM', score: 68 },
            { time: '3:00 PM', score: 81 },
            { time: '9:00 PM', score: 65 },
          ].map((slot, i) => (
            <div key={i} className="p-2 rounded bg-muted/50 flex justify-between items-center">
              <span className="text-xs text-foreground">{slot.time}</span>
              <span className="text-xs text-muted-foreground">{slot.score}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MultiPlatformMockup() {
  const platforms = [
    { name: 'Instagram', icon: '📷', connected: true, followers: '45.2K' },
    { name: 'TikTok', icon: '🎵', connected: true, followers: '128K' },
    { name: 'Twitter', icon: '🐦', connected: true, followers: '23.1K' },
    { name: 'LinkedIn', icon: '💼', connected: false, followers: '—' },
  ]

  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-foreground">Connected Accounts</span>
        <span className="text-xs text-muted-foreground">3/10 used</span>
      </div>
      <div className="flex flex-col gap-2">
        {platforms.map((platform, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <span className="text-xl">{platform.icon}</span>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">{platform.name}</div>
              <div className="text-xs text-muted-foreground">{platform.followers} followers</div>
            </div>
            <div
              className={cn(
                'px-2 py-1 rounded text-xs font-medium',
                platform.connected
                  ? 'bg-primary/10 text-primary'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              {platform.connected ? 'Connected' : 'Connect'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FeaturesPage() {
  const features = [
    {
      badge: 'Content Calendar',
      title: 'Visual drag-and-drop scheduling',
      description:
        'See your entire content strategy at a glance. Drag and drop posts to reschedule, batch-create content, and never miss a posting opportunity.',
      features: [
        'Month, week, and day views',
        'Color-coded by platform',
        'Drag and drop to reschedule',
        'Bulk upload and scheduling',
      ],
      icon: Calendar,
      mockup: <CalendarMockup />,
    },
    {
      badge: 'AI Assistant',
      title: 'Generate content in seconds',
      description:
        'Our AI understands your brand voice and creates engaging captions, suggests trending hashtags, and even generates image ideas—all tailored to your audience.',
      features: [
        'Brand voice training',
        'Multiple style variations',
        'Hashtag optimization',
        'Trend-aware suggestions',
      ],
      icon: Sparkles,
      mockup: <AIMockup />,
      reverse: true,
      ember: true,
    },
    {
      badge: 'Analytics',
      title: 'Understand what works',
      description:
        'Get actionable insights across all your platforms in one unified dashboard. Track growth, engagement, and see which content performs best.',
      features: [
        'Cross-platform metrics',
        'Engagement heatmaps',
        'Best time to post analysis',
        'Competitor benchmarking',
      ],
      icon: BarChart3,
      mockup: <AnalyticsMockup />,
    },
    {
      badge: 'Team Collaboration',
      title: 'Work together seamlessly',
      description:
        'Invite your team, assign roles, and review content before it goes live. Perfect for agencies and growing brands with multiple stakeholders.',
      features: [
        'Role-based permissions',
        'Content approval workflows',
        'Comments and feedback',
        'Activity logging',
      ],
      icon: Users,
      mockup: <TeamMockup />,
      reverse: true,
    },
    {
      badge: 'Smart Scheduling',
      title: 'Post at the perfect time',
      description:
        'Let AI analyze your audience engagement patterns and automatically schedule posts when your followers are most active.',
      features: [
        'AI-powered time optimization',
        'Audience activity analysis',
        'Time zone management',
        'Queue management',
      ],
      icon: Zap,
      mockup: <AutoScheduleMockup />,
      ember: true,
    },
    {
      badge: 'Multi-Platform',
      title: 'All your accounts in one place',
      description:
        'Connect Instagram, TikTok, Twitter, LinkedIn, Facebook, Pinterest, and more. Manage everything from a single dashboard.',
      features: [
        'One-click OAuth connection',
        'Cross-post to multiple platforms',
        'Platform-specific formatting',
        'Unified inbox coming soon',
      ],
      icon: Globe,
      mockup: <MultiPlatformMockup />,
      reverse: true,
    },
  ]

  const additionalFeatures = [
    { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 compliant with bank-level encryption' },
    { icon: Clock, title: 'Time Zone Support', description: 'Schedule in any time zone automatically' },
    { icon: Layers, title: 'Content Library', description: 'Store and organize all your media assets' },
    { icon: MessageSquare, title: 'Unified Inbox', description: 'Respond to comments from one place' },
    { icon: Palette, title: 'Brand Kit', description: 'Save colors, fonts, and templates' },
    { icon: Bot, title: 'Automation Rules', description: 'Set up custom posting automations' },
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#f97316]/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Features"
            title="Everything you need to dominate social"
            subtitle="Powerful, intuitive tools designed to help you create, schedule, and grow—without the complexity."
          />
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <FeatureSection key={index} {...feature} />
      ))}

      {/* Additional Features Grid */}
      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="And so much more"
            subtitle="Every feature you need to run your social media like a pro."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
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
              Ready to experience these features?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl text-pretty">
              Start your 14-day free trial and see why thousands of creators love EmberForge.
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
                Start free trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
