import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Calendar, BarChart2, Sparkles } from "lucide-react";

function AnalyticsBar({ height, color, delay }: { height: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: `${height}%` }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="w-full rounded-t-sm"
      style={{ background: color }}
    />
  );
}

const chip = (label: string, color: string) => (
  <span
    className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
    style={{ backgroundColor: `${color}22`, color }}
  >
    {label}
  </span>
);

export function AppMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto mt-16 w-full max-w-5xl"
    >
      <div
        className="absolute -top-px left-1/2 h-px w-3/4 -translate-x-1/2"
        style={{ background: "linear-gradient(90deg, transparent, #06b6d4, transparent)" }}
      />
      <div
        className="absolute inset-x-0 top-0 h-32 rounded-t-2xl"
        style={{ background: "radial-gradient(ellipse at top, rgba(6,182,212,0.18), transparent 70%)" }}
      />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
        {/* top bar */}
        <div className="flex items-center gap-2 border-b border-border px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ec4899]/70" />
          <span className="h-3 w-3 rounded-full bg-[#3b82f6]/70" />
          <span className="h-3 w-3 rounded-full bg-[#0d9488]/70" />
          <span className="ml-3 text-xs font-medium text-text-muted">ViralEngine · Content calendar</span>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_240px]">
          {/* calendar */}
          <div className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">This week</span>
              <div className="flex gap-2">
                {chip("Scheduled", "#06b6d4")}
                {chip("Published", "#0d9488")}
                {chip("Draft", "#7c3aed")}
              </div>
            </div>
            <div className="mb-2 grid grid-cols-7 gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div key={d} className="text-center text-[10px] font-semibold uppercase tracking-wide text-text-muted">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }).map((_, i) => {
                const colors = ["#0d9488", "#7c3aed", "#3b82f6", "#06b6d4"];
                const posts: Record<number, number> = {
                  2: 1, 4: 2, 7: 1, 11: 1, 13: 2, 16: 1, 19: 3, 22: 1, 25: 2,
                };
                const count = posts[i] ?? 0;
                const hasPost = count > 0;
                const dayNum = i - 2; // first day starts mid-week
                const isToday = i === 13;
                return (
                  <div
                    key={i}
                    className="relative flex aspect-square flex-col gap-1 rounded-md border p-1"
                    style={{
                      backgroundColor: isToday ? "rgba(6,182,212,0.10)" : "rgba(255,255,255,0.015)",
                      borderColor: isToday ? "rgba(6,182,212,0.55)" : "rgba(51,65,85,0.6)",
                    }}
                  >
                    <span
                      className="text-[9px] font-semibold leading-none"
                      style={{ color: dayNum >= 1 && dayNum <= 23 ? (isToday ? "#06b6d4" : "#94a3b8") : "transparent" }}
                    >
                      {dayNum >= 1 && dayNum <= 23 ? dayNum : "·"}
                    </span>
                    {hasPost && (
                      <div className="mt-auto flex flex-wrap gap-0.5">
                        {Array.from({ length: count }).map((__, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, scale: 0.6 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * i + 0.08 * j }}
                            className="h-1.5 flex-1 rounded-full"
                            style={{ background: colors[(i + j) % colors.length], minWidth: "0.4rem" }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* analytics sidebar */}
          <div className="border-t border-border p-5 md:border-l md:border-t-0">
            <span className="text-sm font-semibold text-white">Performance</span>
            <div className="mt-4 flex h-28 items-end gap-2">
              <AnalyticsBar height={45} color="#0d9488" delay={0.1} />
              <AnalyticsBar height={70} color="#06b6d4" delay={0.2} />
              <AnalyticsBar height={55} color="#3b82f6" delay={0.3} />
              <AnalyticsBar height={90} color="#7c3aed" delay={0.4} />
              <AnalyticsBar height={65} color="#ec4899" delay={0.5} />
            </div>
            <div className="mt-5 space-y-3">
              <div className="rounded-lg border border-border/60 p-3">
                <div className="text-xs text-text-muted">Engagement</div>
                <div className="text-lg font-bold text-white">+38%</div>
              </div>
              <div className="rounded-lg border border-border/60 p-3">
                <div className="text-xs text-text-muted">Reach this week</div>
                <div className="text-lg font-bold text-white">12.4k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CalendarVisual() {
  const colors = ["#0d9488", "#7c3aed", "#3b82f6", "#06b6d4", "#ec4899"];
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-4 flex items-center gap-2 text-text-muted">
        <Calendar size={18} className="text-cyan" />
        <span className="text-sm font-semibold text-white">Weekly plan</span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <div key={i} className="text-center text-[10px] font-semibold text-text-muted">
            {d}
          </div>
        ))}
        {Array.from({ length: 21 }).map((_, i) => {
          const hasPost = [1, 3, 6, 8, 10, 13, 16, 18].includes(i);
          return (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-md border border-border/60"
              style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
            >
              {hasPost && (
                <span className="h-2 w-2 rounded-full" style={{ background: colors[i % colors.length] }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AnalyticsVisual() {
  const bars = [
    { h: 50, c: "#0d9488" },
    { h: 75, c: "#06b6d4" },
    { h: 60, c: "#3b82f6" },
    { h: 95, c: "#7c3aed" },
    { h: 70, c: "#ec4899" },
    { h: 55, c: "#06b6d4" },
  ];
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-4 flex items-center gap-2">
        <BarChart2 size={18} className="text-purple" />
        <span className="text-sm font-semibold text-white">Channel performance</span>
      </div>
      <div className="flex h-40 items-end gap-3">
        {bars.map((b, i) => (
          <AnalyticsBar key={i} height={b.h} color={b.c} delay={i * 0.1} />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-border/60 p-3">
          <div className="text-xs text-text-muted">Top post reach</div>
          <div className="text-lg font-bold text-white">24.8k</div>
        </div>
        <div className="rounded-lg border border-border/60 p-3">
          <div className="text-xs text-text-muted">Avg. engagement</div>
          <div className="text-lg font-bold text-white">+41%</div>
        </div>
      </div>
    </div>
  );
}

export function AIVisual() {
  const full =
    "Behind every great post is a plan. Here's a caption that earns attention without losing your voice…";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % (full.length + 24);
      setText(full.slice(0, Math.min(i, full.length)));
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles size={18} className="text-cyan" />
        <span className="text-sm font-semibold text-white">Caption assistant</span>
      </div>
      <div className="min-h-[120px] rounded-lg border border-border/60 p-4">
        <p className="text-sm leading-relaxed text-text-strong-muted">
          {text}
          <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-cyan align-middle" />
        </p>
      </div>
      <div className="mt-4 flex gap-2">
        {chip("Tighten", "#0d9488")}
        {chip("Shorten", "#06b6d4")}
        {chip("New angle", "#7c3aed")}
      </div>
    </div>
  );
}
