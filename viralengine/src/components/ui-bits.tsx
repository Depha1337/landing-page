import { motion, type Variants } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logoWord from "@/assets/logo_full.png.asset.json";

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  overline,
  title,
  body,
  center = true,
  className = "",
}: {
  overline: string;
  title: ReactNode;
  body?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      <span className="overline text-teal">{overline}</span>
      <h2 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-text-primary">
        {title}
      </h2>
      {body && <p className="mt-5 text-[1.0625rem] leading-relaxed text-text-muted">{body}</p>}
    </Reveal>
  );
}

type BtnVariant = "primary" | "ghost";

export function CTAButton({
  variant = "primary",
  href,
  to,
  children,
  className = "",
}: {
  variant?: BtnVariant;
  href?: string;
  to?: string;
  children: ReactNode;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-bold transition-all duration-200 hover:scale-[1.02]";
  const styles =
    variant === "primary"
      ? "text-white"
      : "border border-border text-text-primary hover:border-cyan";
  const primaryStyle =
    variant === "primary"
      ? {
          backgroundImage: "linear-gradient(100deg, #0d9488, #06b6d4)",
        }
      : undefined;

  const content = (
    <span
      className={`${base} ${styles} ${variant === "primary" ? "shadow-[0_0_0_rgba(13,148,136,0)] hover:shadow-[0_0_30px_rgba(13,148,136,0.5)]" : ""} ${className}`}
      style={primaryStyle}
    >
      {children}
    </span>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }
  return (
    <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-cyan"
      style={{ backgroundColor: "rgba(13,148,136,0.1)" }}
    >
      {children}
    </span>
  );
}

export function LogoWord({ className = "h-8" }: { className?: string }) {
  return (
    <span className="logo-outline relative inline-flex overflow-hidden rounded-lg">
      <img src={logoWord.url} alt="ViralEngine" className={`${className} relative z-[1] w-auto rounded-lg`} />
    </span>
  );
}
