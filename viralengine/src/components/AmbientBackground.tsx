import { motion, type TargetAndTransition } from "framer-motion";

export function AmbientBackground({ intense = false }: { intense?: boolean }) {
  const orbBase = "pointer-events-none absolute rounded-full blur-[120px]";
  const driftA: TargetAndTransition = {
    x: [0, 20, 0],
    y: [0, -15, 0],
    transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
  };
  const driftB: TargetAndTransition = {
    x: [0, -18, 0],
    y: [0, 18, 0],
    transition: { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 },
  };
  const driftC: TargetAndTransition = {
    x: [0, 22, 0],
    y: [0, 14, 0],
    transition: { duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 },
  };

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* grid */}
      <div className="absolute inset-0 grid-pattern opacity-100" />
      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* orbs */}
      <motion.div
        animate={driftA}
        className={orbBase}
        style={{
          top: "-10%",
          left: "-5%",
          width: intense ? 700 : 520,
          height: intense ? 700 : 520,
          background: intense ? "rgba(6,182,212,0.12)" : "rgba(6,182,212,0.07)",
        }}
      />
      <motion.div
        animate={driftB}
        className={orbBase}
        style={{
          top: "-5%",
          right: "-8%",
          width: intense ? 720 : 540,
          height: intense ? 720 : 540,
          background: intense ? "rgba(124,58,237,0.12)" : "rgba(124,58,237,0.07)",
        }}
      />
      <motion.div
        animate={driftC}
        className={orbBase}
        style={{
          top: "45%",
          left: "30%",
          width: 460,
          height: 460,
          background: "rgba(13,148,136,0.06)",
        }}
      />
    </div>
  );
}
