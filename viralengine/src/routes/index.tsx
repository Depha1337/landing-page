import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Calendar,
  BarChart2,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
  Globe,
  User,
  Video,
  Store,
  Facebook,
  Instagram,
  Youtube,
  Music2,
} from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeader, CTAButton, Pill } from "@/components/ui-bits";
import { Section, PersonaCard, BulletRail, FinalCTA } from "@/components/sections";
import { NumberedCard, FeatureCard } from "@/components/cards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Accordion } from "@/components/Accordion";
import { AppMockup } from "@/components/mockups";
import { PricingCards, BillingToggle } from "@/components/Pricing";
import { LINKS, STEPS, FAQS } from "@/lib/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ViralEngine — Turn content into growth" },
      {
        name: "description",
        content:
          "ViralEngine helps creators and small businesses optimize every post with better scheduling, richer analytics, and faster content support.",
      },
      { property: "og:title", content: "ViralEngine — Turn content into growth" },
      {
        property: "og:description",
        content:
          "Schedule, refine, and improve every post with more intent. Built for solo operators, small creators, and local brands.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const platforms = [
  { name: "Facebook", icon: Facebook, color: "#3b82f6" },
  { name: "Instagram", icon: Instagram, color: "#ec4899" },
  { name: "YouTube", icon: Youtube, color: "#ef4444" },
  { name: "TikTok", icon: Music2, color: "#06b6d4" },
];

function Home() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-20">
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(6,182,212,0.12), rgba(124,58,237,0.1), transparent 70%)",
          }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <Pill>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan pulse-dot" />
              </span>
              Turn content into growth
            </Pill>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight"
          >
            <span className="text-white">Schedule, refine, and</span>{" "}
            <span className="text-gradient">improve every post</span>{" "}
            <span className="text-white">with more intent.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gradient-soft mx-auto mt-6 max-w-[600px] text-[1.0625rem] leading-relaxed md:text-lg"
          >
            ViralEngine helps creators and small businesses optimize every post for real performance
            with better scheduling, richer analytics, and faster content support.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <CTAButton href={LINKS.signup}>Start free trial</CTAButton>
            <CTAButton variant="ghost" to="/features">
              See features
            </CTAButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mx-auto mt-10 max-w-2xl">
            <div className="mx-auto mb-5 h-px w-24 bg-border" />
            <p className="text-sm text-text-muted">
              Built for solo operators, small creators, and local brands that want stronger
              publishing tools without added overhead.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {platforms.map((p) => (
              <span
                key={p.name}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-strong-muted"
              >
                <p.icon size={16} style={{ color: p.color }} />
                {p.name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* HERO MOCKUP (full width below hero text) */}
      <div className="relative px-6 pb-24">
        <AppMockup />
      </div>

      {/* SECTION 2 — Core capabilities */}
      <Section surface angled>
        <SectionHeader
          overline="Core capabilities"
          title="Three capabilities at the center of a stronger content workflow."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <NumberedCard
            index="01"
            icon={Calendar}
            color="teal"
            heading="Optimized scheduling"
            body="Plan and queue content across connected channels with timing in mind so each post has a better chance to perform instead of landing wherever it fits."
          />
          <NumberedCard
            index="02"
            icon={BarChart2}
            color="purple"
            heading="Rich analytics"
            body="Review what is gaining traction, what is stalling, and where the next round of effort should go without waiting on outside reporting."
          />
          <NumberedCard
            index="03"
            icon={Sparkles}
            color="cyan"
            heading="Content generation assistance"
            body="Use AI to accelerate captions, directions, and first drafts, then tighten the final output before it goes live."
          />
        </div>
      </Section>

      {/* SECTION 3 — Bullet value props */}
      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <SectionHeader
            center={false}
            overline="What you get"
            title="Tools that respect your judgment and your time."
            body="Every part of the workflow is built to give smaller operators more leverage without taking control away."
          />
          <BulletRail
            items={[
              { icon: Target, text: "Schedule posts around performance instead of guesswork." },
              {
                icon: TrendingUp,
                text: "Use analytics to see what is actually moving, not just what was posted.",
              },
              {
                icon: Zap,
                text: "Get content assistance that helps you move faster without giving up judgment.",
              },
              {
                icon: Globe,
                text: "Manage connected Facebook, Instagram, YouTube, and TikTok workflows from one place.",
              },
            ]}
          />
        </div>
      </Section>

      {/* SECTION 4 — First 15 minutes */}
      <Section surface angled>
        <SectionHeader
          overline="Your first 15 minutes"
          title="Get from setup to a stronger publishing rhythm without extra layers in the way."
          body="The first session should move quickly: connect the workflow, shape the next few posts, set a schedule, and start learning from the signal that comes back."
        />
        <div className="mt-16">
          <ProcessSteps steps={STEPS} />
        </div>
      </Section>


      {/* SECTION 6 — Who it fits */}
      <Section surface angled>
        <SectionHeader
          overline="Who it fits"
          title="Designed for people who still want their hands on the work."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <PersonaCard
            icon={User}
            color="teal"
            heading="Solo entrepreneurs"
            body="For founders and one-person brands who need better content operations without handing the work off to someone else."
          />
          <PersonaCard
            icon={Video}
            color="purple"
            heading="Small creators"
            body="For smaller creators who want their posts to perform better and their content process to feel more professional."
          />
          <PersonaCard
            icon={Store}
            color="cyan"
            heading="Local small businesses"
            body="For businesses like shops, stalls, studios, and service brands that need a stronger social presence without outside overhead."
          />
          <PersonaCard
            icon={TrendingUp}
            color="blue"
            heading="Growing brands"
            body="For brands with a busier publishing cadence that need more room to operate without changing the workflow."
          />
        </div>
      </Section>

      {/* SECTION 7 — Pricing preview */}
      <Section>
        <SectionHeader
          overline="Pricing"
          title="Choose the tier that fits the workload"
          body="All tiers keep the same core workflow. Choose the plan with the right amount of room for how you publish."
        />
        <div className="mt-10">
          <BillingToggle annual={annual} setAnnual={setAnnual} />
        </div>
        <div className="mt-12">
          <PricingCards annual={annual} />
        </div>
      </Section>

      {/* SECTION 8 — FAQ teaser */}
      <Section surface angled>
        <SectionHeader overline="FAQ" title="Straight answers before you commit." />
        <div className="mt-12">
          <Accordion items={FAQS} />
        </div>
      </Section>

      {/* SECTION 9 — Final CTA */}
      <FinalCTA
        title="Start the Creator trial and prove the workflow before you pay."
        body="Create the account, activate the 14-day trial without a card, and decide whether the workflow deserves a paid place in your month."
        primary={{ label: "Start free trial", href: LINKS.signup }}
        secondary={{ label: "See features", to: "/features" }}
      />
    </>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;
