import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal, CTAButton } from "./ui-bits";

const accentColor: Record<string, string> = {
  teal: "#0d9488",
  cyan: "#06b6d4",
  purple: "#7c3aed",
  blue: "#3b82f6",
};

export function Section({
  children,
  className = "",
  surface = false,
  angled = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  surface?: boolean;
  angled?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${className}`}
      style={
        surface
          ? {
              backgroundColor: "var(--bg-surface)",
              clipPath: angled
                ? "polygon(0 3%, 100% 0, 100% 97%, 0 100%)"
                : undefined,
            }
          : undefined
      }
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}

export function PersonaCard({
  icon: Icon,
  color,
  heading,
  body,
}: {
  icon: LucideIcon;
  color: keyof typeof accentColor;
  heading: string;
  body: string;
}) {
  return (
    <Reveal className="h-full">
      <div
        className="h-full rounded-2xl border border-border bg-base p-8 transition-all duration-200 hover:border-border-strong"
        style={{ borderLeft: `4px solid ${accentColor[color]}` }}
      >
        <div className="relative inline-flex">
          <div
            className="absolute inset-0 rounded-full blur-lg"
            style={{ background: `${accentColor[color]}55` }}
          />
          <Icon size={40} className="relative" style={{ color: accentColor[color] }} />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-text-primary">{heading}</h3>
        <p className="mt-3 text-[0.975rem] leading-relaxed text-text-muted">{body}</p>
      </div>
    </Reveal>
  );
}

export function BulletRail({
  items,
}: {
  items: { icon: LucideIcon; text: string }[];
}) {
  return (
    <div className="relative pl-2">
      <div
        className="absolute bottom-3 left-[27px] top-3 w-px"
        style={{ background: "linear-gradient(180deg, #06b6d4, #7c3aed)" }}
      />
      <div className="space-y-10">
        {items.map(({ icon: Icon, text }, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="relative flex items-start gap-6">
              <div className="relative z-10 inline-flex">
                <div
                  className="absolute inset-0 rounded-full blur-md"
                  style={{ background: "rgba(6,182,212,0.5)" }}
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface">
                  <Icon size={20} className="text-cyan" />
                </div>
              </div>
              <p className="pt-3 text-lg leading-relaxed text-text-strong-muted">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function FinalCTA({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { label: string; href?: string; to?: string };
  secondary: { label: string; href?: string; to?: string };
}) {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.18), rgba(124,58,237,0.14), transparent 70%)",
        }}
      />
      {/* speed lines */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute h-px"
            style={{
              width: `${30 + i * 14}%`,
              top: `${42 + i * 5}%`,
              left: "8%",
              background: `linear-gradient(90deg, transparent, ${
                ["#06b6d4", "#3b82f6", "#7c3aed", "#ec4899"][i]
              }, transparent)`,
            }}
          />
        ))}
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-text-primary">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-text-muted">
            {body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href={primary.href} to={primary.to}>
              {primary.label}
            </CTAButton>
            <CTAButton variant="ghost" href={secondary.href} to={secondary.to}>
              {secondary.label}
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
