import { motion } from "framer-motion";

export default function PageHeader({
  overline,
  title,
  subtitle,
  accent = "#E6007E",
}) {
  return (
    <section
      data-testid="page-header"
      className="relative bg-[#0A0A0A] text-white overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28"
    >
      <div className="absolute inset-0 grain pointer-events-none"></div>
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
        style={{ background: accent }}
      ></div>
      <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-30 bg-cmyk-cyan"></div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {overline && (
            <div className="flex items-center gap-3 mb-8">
              <span
                className="inline-block w-8 h-[2px]"
                style={{ background: accent }}
              ></span>
              <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-white/70">
                {overline}
              </span>
            </div>
          )}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-semibold text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
