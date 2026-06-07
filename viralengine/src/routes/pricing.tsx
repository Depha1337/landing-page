import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BarChart, Package, ArrowUpCircle } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui-bits";
import { Section, FinalCTA } from "@/components/sections";
import { FeatureCard } from "@/components/cards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PricingCards, BillingToggle } from "@/components/Pricing";
import { LINKS } from "@/lib/constants";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ViralEngine" },
      {
        name: "description",
        content:
          "All tiers keep the same core workflow. Choose the plan with the right amount of room for how you publish.",
      },
      { property: "og:title", content: "Pricing — ViralEngine" },
      {
        property: "og:description",
        content: "Creator, Pro, and Business plans. Start with a 14-day trial, no credit card.",
      },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const upgradeSteps = [
  {
    title: "Start with Creator",
    body: "Create the account, activate the 14-day Creator trial, and see whether the platform deserves a real place in your weekly process.",
  },
  {
    title: "Upgrade inside the app",
    body: "When you need more room, move into Creator, Pro, or Business from billing settings instead of making a big commitment up front.",
  },
  {
    title: "Keep the commercial model simple",
    body: "Choose the plan that fits now, then move up when the workload grows. No sales conversation required.",
  },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-32 pb-12">
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.1), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="overline text-teal">Pricing</span>
            <h1 className="mt-5 text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[1.07] tracking-tight">
              <span className="text-white">Choose the tier that </span>
              <span className="text-gradient">fits the workload</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-text-muted md:text-lg">
              All tiers keep the same core workflow. Choose the plan with the right amount of room for
              how you publish.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing cards */}
      <Section className="!pt-4">
        <BillingToggle annual={annual} setAnnual={setAnnual} />
        <div className="mt-12">
          <PricingCards annual={annual} />
        </div>
        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-text-muted">
            Paid plans add more operating capacity for creators and businesses with a heavier weekly
            cadence.
          </p>
        </Reveal>
      </Section>

      {/* Upgrade path */}
      <Section surface angled>
        <SectionHeader overline="Upgrade path" title="The commercial flow stays simple" />
        <div className="mt-16">
          <ProcessSteps steps={upgradeSteps} />
        </div>
      </Section>

      {/* Pricing philosophy */}
      <Section>
        <SectionHeader
          overline="Pricing posture"
          title="How to think about the plans"
          body="The right tier comes down to how much room you need to publish consistently and keep the workflow moving."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureCard
            icon={BarChart}
            color="teal"
            heading="Choose based on publishing volume"
            body="Pick the plan that matches how often you publish and how much operating room you need each week."
          />
          <FeatureCard
            icon={Package}
            color="purple"
            heading="Pay for more room, not a different product"
            body="Every plan keeps the same core workflow. Higher tiers add capacity for creators and businesses with heavier demands."
          />
          <FeatureCard
            icon={ArrowUpCircle}
            color="cyan"
            heading="Upgrade without changing the workflow"
            body="Move to the next tier when the workload grows, without switching tools or relearning the way the product works."
          />
        </div>
      </Section>

      {/* Final CTA */}
      <FinalCTA
        title="Start the Creator trial, then scale when the workload demands it"
        body="Creator proves the workflow. Pro and Business expand capacity once the system is already working."
        primary={{ label: "Start free trial", href: LINKS.signup }}
        secondary={{ label: "Read the FAQ", to: "/faq" }}
      />
    </>
  );
}
