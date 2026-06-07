import { motion } from "framer-motion";

type Step = { title: string; body: string };

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="relative mx-auto max-w-6xl">
      {/* desktop horizontal connecting line */}
      <div className="relative hidden md:block">
        <div className="absolute left-0 right-0 top-7 h-0.5 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full w-full origin-left"
            style={{
              backgroundImage: "linear-gradient(90deg, #06b6d4, #3b82f6, #7c3aed, #ec4899)",
            }}
          />
        </div>
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.4 + i * 0.15 }}
            >
              <div
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 text-lg font-extrabold text-white"
                style={{
                  borderColor: "transparent",
                  background:
                    "linear-gradient(#0f172a,#0f172a) padding-box, linear-gradient(135deg,#06b6d4,#7c3aed) border-box",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* mobile vertical */}
      <div className="relative space-y-8 md:hidden">
        <div
          className="absolute bottom-2 left-7 top-2 w-0.5"
          style={{ backgroundImage: "linear-gradient(180deg, #06b6d4, #3b82f6, #7c3aed, #ec4899)" }}
        />
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex gap-5"
          >
            <div
              className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white"
              style={{
                background:
                  "linear-gradient(#0f172a,#0f172a) padding-box, linear-gradient(135deg,#06b6d4,#7c3aed) border-box",
                border: "2px solid transparent",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
