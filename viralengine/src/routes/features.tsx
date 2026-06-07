import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  BarChart2,
  Sparkles,
  Clock,
  Target,
  TrendingUp,
  Link as LinkIcon,
  Edit3,
  User,
  Shield,
  Rocket,
} from "lucide-react";
import { Reveal, SectionHeader, CTAButton } from "@/components/ui-bits";
import { Section } from "@/components/sections";
import { FeatureCard, NumberedCard, IconGlow } from "@/components/cards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CalendarVisual, AnalyticsVisual, AIVisual } from "@/components/mockups";
import { LINKS, STEPS } from "@/lib/constants";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — ViralEngine" },
      {
        name: "description",
        content:
          "Use one workflow instead of a chain of patched-together tools: decide what to make, draft it faster, review it properly, and keep publishing.",
      },
      { property: "og:title", content: "Features — ViralEngine" },
      {
        property: "og:description",
        content: "Scheduling, analytics, and content assistance built around the real content loop.",
      },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: Features,
});

function DeepDive({
  reverse = false,
  overline,
  title,
  body,
  bullets,
  visual,
}: {
  reverse?: boolean;
  overline: string;
  title: string;
  body: string;
  bullets: { icon: typeof Clock; text: string }[];
  visual: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <div className={reverse ? "lg:order-2" : ""}>
        <Reveal>
          <span className="overline text-teal">{overline}</span>
          <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight text-text-primary">
            {title}
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-text-muted">{body}</p>
          <ul className="mt-8 space-y-5">
            {bullets.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4">
                <div className="relative inline-flex shrink-0">
                  <div
                    className="absolute inset-0 rounded-full blur-md"
                    style={{ background: "rgba(6,182,212,0.4)" }}
                  />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface">
                    <Icon size={18} className="text-cyan" />
                  </div>
                </div>
                <span className="text-[1.0625rem] text-text-strong-muted">{text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Reveal className={reverse ? "lg:order-1" : ""} delay={0.1}>
        {visual}
      </Reveal>
    </div>
  );
}

function Features() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-32 pb-16">
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.1), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="overline text-teal">Features</span>
            <h1 className="mt-5 text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[1.07] tracking-tight">
              <span className="text-white">Use one workflow instead of a </span>
              <span className="text-gradient">chain of patched-together tools.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-text-muted md:text-lg">
              ViralEngine is built around the real content loop: decide what to make, draft it
              faster, review it properly, and keep the publishing rhythm moving.
            </p>
            <div className="mt-9 flex justify-center">
              <CTAButton href={LINKS.signup}>Start free trial</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Operating principles */}
      <Section surface angled>
        <SectionHeader
          overline="Operating principles"
          title="The product stays most useful when the workflow remains honest"
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureCard
            icon={Shield}
            color="teal"
            heading="Stronger publishing tools without added overhead"
            body="ViralEngine is built for smaller operators who need stronger publishing tools without adding extra layers to the workflow."
          />
          <FeatureCard
            icon={Rocket}
            color="purple"
            heading="Built for small accounts with real ambitions"
            body="The target user is the solo entrepreneur, small creator, or local business that still needs better scheduling, analysis, and content support."
          />
          <FeatureCard
            icon={Edit3}
            color="cyan"
            heading="Move faster without giving up editorial control"
            body="Use assistance to speed up drafts, planning, and revisions while keeping final judgment with the person who knows the brand best."
          />
        </div>
      </Section>

      {/* Core capabilities deep */}
      <Section>
        <SectionHeader
          overline="Core capabilities"
          title="What ViralEngine is meant to make easier"
          body="These are the core capabilities that help creators and businesses plan, publish, and improve their content with more consistency."
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

      {/* Scheduling deep dive */}
      <Section surface angled>
        <DeepDive
          overline="Scheduling"
          title="Schedule for performance, not convenience"
          body="Scheduling should do more than hold a date on a calendar. ViralEngine is built to help smaller brands place content on Facebook, Instagram, YouTube, and TikTok with more intent and less guesswork."
          bullets={[
            { icon: Calendar, text: "Plan ahead without losing the weekly rhythm" },
            { icon: Clock, text: "Keep ideas, drafts, and timing decisions connected" },
            { icon: Target, text: "Give each post a better chance to earn attention" },
          ]}
          visual={<CalendarVisual />}
        />
      </Section>

      {/* Analytics deep dive */}
      <Section>
        <DeepDive
          reverse
          overline="Analytics"
          title="Use reporting to improve the next post, not just admire the last one"
          body="See what is gaining traction, what needs work, and what to change next across your connected channels without waiting on outside reporting to connect the dots."
          bullets={[
            { icon: TrendingUp, text: "See what is getting traction and what is fading" },
            { icon: BarChart2, text: "Use performance signals to shape the next round" },
            { icon: LinkIcon, text: "Keep insight close to the publishing workflow" },
          ]}
          visual={<AnalyticsVisual />}
        />
      </Section>

      {/* Content assistance deep dive */}
      <Section surface angled>
        <DeepDive
          overline="Content assistance"
          title="Move faster on drafts without sounding machine-made"
          body="Content generation assistance should help you get unstuck, not turn the whole brand voice over to automation. ViralEngine is meant to help smaller operators move faster while staying in control."
          bullets={[
            { icon: Sparkles, text: "Generate ideas, captions, and alternate directions faster" },
            { icon: Edit3, text: "Use assistance to tighten output before scheduling" },
            { icon: User, text: "Keep final judgment with the person who owns the brand" },
          ]}
          visual={<AIVisual />}
        />
      </Section>

      {/* Workflow steps */}
      <Section>
        <SectionHeader
          overline="Workflow"
          title="The intended weekly path is straightforward"
          body="Move from connection to planning, drafting, scheduling, and review without rebuilding the same context at each step."
        />
        <div className="mt-16">
          <ProcessSteps steps={STEPS} />
        </div>
      </Section>

      {/* Final CTA */}
      <div className="text-center">
        <Section>
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <span className="overline text-teal">Get started</span>
              <h2 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight text-text-primary">
                Use the product the way it is meant to be used
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-text-muted">
                Start the Creator trial, learn the workflow in context, and then decide whether a
                higher-capacity tier earns the upgrade.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTAButton href={LINKS.signup}>Start free trial</CTAButton>
                <CTAButton variant="ghost" to="/pricing">
                  See pricing
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </Section>
      </div>
    </>
  );
}
