import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { TIERS } from "@/lib/constants";

function PriceDisplay({
  annual,
  tier,
}: {
  annual: boolean;
  tier: (typeof TIERS)[number];
}) {
  const price = annual ? tier.priceAnnual : tier.priceMonthly;
  const unit = annual ? tier.unitAnnual : tier.unitMonthly;
  return (
    <div className="flex min-h-[60px] items-end gap-1 overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={price}
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -28, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-4xl font-extrabold text-text-primary glow-price"
        >
          {price}
        </motion.span>
      </AnimatePresence>
      <span className="pb-1 text-sm font-medium text-text-muted">{unit}</span>
    </div>
  );
}

export function PricingCards({ annual }: { annual: boolean }) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
      {TIERS.map((tier) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`relative flex h-full flex-col rounded-2xl p-8 ${
            tier.featured
              ? "border-gradient lg:shadow-[0_0_40px_rgba(124,58,237,0.18)]"
              : "border border-border bg-surface"
          }`}
        >
          {tier.badge && (
            <span
              className="absolute -top-3 right-6 rounded-full px-3 py-1 text-[11px] font-bold text-white"
              style={{ backgroundImage: "linear-gradient(100deg, #0d9488, #06b6d4)" }}
            >
              {tier.badge}
            </span>
          )}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-lg font-bold text-text-primary">{tier.name}</h3>
            <span className="mt-1.5 min-h-[1.25rem] text-xs font-semibold text-[#39ff14] [text-shadow:0_0_10px_rgba(57,255,20,0.5)]">
              {tier.prefix ?? "\u00A0"}
            </span>
          </div>
          <div className="mt-3">
            <PriceDisplay annual={annual} tier={tier} />
          </div>
          <p className="mt-3 min-h-[3.5rem] text-sm leading-relaxed text-[#7dd3fc]">
            <span className="font-semibold">Best for:</span> {tier.bestFor}
          </p>

          <ul className="mt-6 flex-1 space-y-3">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check size={18} className="mt-0.5 shrink-0 text-teal" />
                <span className="text-sm text-text-strong-muted">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href={tier.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 block rounded-full px-6 py-3.5 text-center text-sm font-bold transition-all hover:scale-[1.02] ${
              tier.featured ? "text-white hover:shadow-[0_0_25px_rgba(13,148,136,0.5)]" : "text-white"
            }`}
            style={{ backgroundImage: "linear-gradient(100deg, #0d9488, #06b6d4)" }}
          >
            {tier.cta}
          </a>
        </motion.div>
      ))}
    </div>
  );
}

export function BillingToggle({
  annual,
  setAnnual,
}: {
  annual: boolean;
  setAnnual: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`text-sm font-medium ${!annual ? "text-white" : "text-text-muted"}`}>
        Monthly
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={annual}
        aria-label="Toggle annual billing"
        onClick={() => setAnnual(!annual)}
        className="relative h-7 w-14 rounded-full border border-border transition-colors"
        style={{ backgroundColor: annual ? "rgba(99,102,241,0.25)" : "rgba(255,255,255,0.06)" }}
      >
        <span
          className="absolute top-0.5 h-5 w-5 rounded-full bg-cyan-purple"
          style={{
            left: annual ? "calc(100% - 1.375rem)" : "0.125rem",
            backgroundColor: "#06b6d4",
          }}
        />
      </button>
      <span className={`text-sm font-medium ${annual ? "text-white" : "text-text-muted"}`}>
        Annual
      </span>
    </div>
  );
}
