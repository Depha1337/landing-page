export const LINKS = {
  signup: "https://app.viralengineapp.com/signup?tier=creator&billingCycle=monthly&trial=true",
  login: "https://app.viralengineapp.com/login",
  signupPro: "https://app.viralengineapp.com/signup?tier=pro&billingCycle=monthly",
  signupBusiness: "https://app.viralengineapp.com/signup?tier=business&billingCycle=monthly",
  support: "mailto:support@viralengineapp.com",
  privacy: "/legal/privacy-policy",
  terms: "/legal/terms-of-service",
  dataDeletion: "/legal/data-deletion",
} as const;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "FAQ", to: "/faq" },
] as const;

export type Tier = {
  name: string;
  badge?: string;
  priceMonthly: string;
  priceAnnual: string;
  unitMonthly: string;
  unitAnnual: string;
  prefix?: string;
  bestFor: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
};

export const TIERS: Tier[] = [
  {
    name: "Creator",
    prefix: "14 days free, then",
    priceMonthly: "$29",
    priceAnnual: "$295.80",
    unitMonthly: "/mo",
    unitAnnual: "/yr",
    bestFor: "Solo creators and small brands posting regularly each week",
    features: [
      "14-day trial without a credit card",
      "50 monthly AI credits",
      "50GB media storage",
      "Weekly reports included",
      "All core publishing features",
    ],
    cta: "Start free trial",
    ctaHref: LINKS.signup,
  },
  {
    name: "Pro",
    badge: "Most popular",
    priceMonthly: "$49",
    priceAnnual: "$499.80",
    unitMonthly: "/mo",
    unitAnnual: "/yr",
    bestFor: "Heavier publishing schedules and busier creator or business workflows",
    features: [
      "150 monthly AI credits",
      "200GB media storage",
      "Weekly reports included",
      "All core publishing features",
    ],
    cta: "Create account",
    ctaHref: LINKS.signupPro,
    featured: true,
  },
  {
    name: "Business",
    priceMonthly: "$89",
    priceAnnual: "$907.80",
    unitMonthly: "/mo",
    unitAnnual: "/yr",
    bestFor: "The busiest creators and businesses with the highest publishing demands",
    features: [
      "500 monthly AI credits",
      "500GB media storage",
      "Weekly reports included",
      "All core publishing features",
    ],
    cta: "Create account",
    ctaHref: LINKS.signupBusiness,
  },
];

export const FAQS = [
  {
    q: "Do I need a credit card to get started?",
    a: "No. You can create an account without a card and move to a paid tier when you need more room.",
  },
  {
    q: "Is ViralEngine trying to replace strategy with AI?",
    a: "No. The product is built to speed up planning and drafting, not to remove judgment. AI helps you move faster; you still decide what is ready to publish.",
  },
  {
    q: "Which channels are supported today?",
    a: "ViralEngine supports YouTube Shorts, Facebook Pages, Instagram Creator or Business accounts, and TikTok workflows. TikTok availability may be subject to platform approval and rollout status.",
  },
  {
    q: "How should I think about paid tiers?",
    a: "Choose the plan that matches how often you publish and how much room you need. Higher tiers add capacity, not a different product.",
  },
  {
    q: "Where do I go if I need help?",
    a: "Email support@viralengineapp.com and we can help with product questions, billing, or legal documents.",
  },
];

export const STEPS = [
  {
    title: "Set up the account and connect the first workflow",
    body: "Get into the platform quickly so you can stop treating content publishing like a separate manual job.",
  },
  {
    title: "Schedule with intent",
    body: "Use the planning and scheduling flow to build a steady rhythm instead of deciding each post in isolation.",
  },
  {
    title: "Draft faster with assistance",
    body: "Generate directions, captions, and revisions faster, then keep final editorial control before anything is published.",
  },
  {
    title: "Measure and improve the next round",
    body: "Use analytics to understand what is performing so the next week of content gets smarter instead of noisier.",
  },
];
