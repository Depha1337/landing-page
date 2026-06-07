import type { LucideIcon } from "lucide-react";
import { Reveal } from "./ui-bits";

const glowMap: Record<string, string> = {
  teal: "rgba(13,148,136,0.45)",
  cyan: "rgba(6,182,212,0.45)",
  purple: "rgba(124,58,237,0.45)",
  blue: "rgba(59,130,246,0.45)",
};

const colorMap: Record<string, string> = {
  teal: "#0d9488",
  cyan: "#06b6d4",
  purple: "#7c3aed",
  blue: "#3b82f6",
};

export function IconGlow({
  icon: Icon,
  color = "teal",
  size = 28,
}: {
  icon: LucideIcon;
  color?: keyof typeof glowMap;
  size?: number;
}) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-full blur-xl transition-opacity duration-200"
        style={{ background: glowMap[color] }}
      />
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <Icon size={size} style={{ color: colorMap[color] }} />
      </div>
    </div>
  );
}

export function FeatureCard({
  icon,
  color = "teal",
  heading,
  body,
}: {
  icon: LucideIcon;
  color?: keyof typeof glowMap;
  heading: string;
  body: string;
}) {
  return (
    <Reveal className="group h-full">
      <div className="h-full rounded-2xl border border-border bg-surface p-8 transition-all duration-200 hover:border-cyan hover:bg-[rgba(6,182,212,0.04)]">
        <IconGlow icon={icon} color={color} />
        <h3 className="mt-6 text-xl font-semibold text-text-primary">{heading}</h3>
        <p className="mt-3 text-[0.975rem] leading-relaxed text-text-muted">{body}</p>
      </div>
    </Reveal>
  );
}

export function NumberedCard({
  index,
  icon,
  color = "teal",
  heading,
  body,
}: {
  index: string;
  icon: LucideIcon;
  color?: keyof typeof glowMap;
  heading: string;
  body: string;
}) {
  return (
    <Reveal className="group h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-10 transition-all duration-200 hover:border-cyan hover:bg-[rgba(6,182,212,0.04)]">
        <span
          className="pointer-events-none absolute right-6 top-2 select-none text-[80px] font-extrabold leading-none"
          style={{ color: "rgba(255,255,255,0.05)" }}
        >
          {index}
        </span>
        <div className="relative">
          <IconGlow icon={icon} color={color} />
          <h3 className="mt-6 text-[1.35rem] font-semibold text-text-primary">{heading}</h3>
          <p className="mt-3 text-[0.975rem] leading-relaxed text-text-muted">{body}</p>
        </div>
      </div>
    </Reveal>
  );
}
