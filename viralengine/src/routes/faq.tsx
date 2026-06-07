import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeader, CTAButton } from "@/components/ui-bits";
import { Section, FinalCTA } from "@/components/sections";
import { Accordion } from "@/components/Accordion";
import { LINKS, FAQS } from "@/lib/constants";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — ViralEngine" },
      {
        name: "description",
        content:
          "Clear answers on how the ViralEngine workflow, pricing, and support model actually work.",
      },
      { property: "og:title", content: "FAQ — ViralEngine" },
      {
        property: "og:description",
        content: "Questions people ask before they trust the workflow.",
      },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

const chips = [
  { label: "support@viralengineapp.com", href: LINKS.support },
  { label: "Privacy policy", href: LINKS.privacy },
  { label: "Terms of service", href: LINKS.terms },
];

function FAQ() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-32 pb-12">
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.1), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="overline text-teal">FAQ</span>
            <h1 className="mt-5 text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[1.07] tracking-tight">
              <span className="text-white">Questions people ask before they </span>
              <span className="text-gradient">trust the workflow.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-text-muted md:text-lg">
              Clear answers on how the workflow, pricing, and support model actually work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full FAQ */}
      <Section className="!pt-4">
        <SectionHeader
          overline="Answers"
          title="Frequently asked questions"
          body="Use this page to understand how the product works before you commit."
        />
        <div className="mt-12">
          <Accordion items={FAQS} />
        </div>

        {/* Support card */}
        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div className="border-gradient rounded-2xl p-8 text-center md:p-10">
            <h3 className="text-xl font-semibold text-text-primary md:text-2xl">
              Contact support if you want help choosing the right path.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-text-muted">
              If your question is about billing, legal documents, or the right plan for your
              workflow, we can answer it directly.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {chips.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium text-text-strong-muted transition-colors hover:border-cyan hover:text-white"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Final CTA */}
      <FinalCTA
        title="If the workflow looks right, choose the plan that fits today"
        body="Start with the plan that matches your workload and move up when you need more room."
        primary={{ label: "Start free trial", href: LINKS.signup }}
        secondary={{ label: "See features", to: "/features" }}
      />
    </>
  );
}
