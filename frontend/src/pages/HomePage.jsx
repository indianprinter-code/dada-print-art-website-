import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Zap, Shield, Layers } from "lucide-react";
import { COMPANY, INDUSTRIES, SERVICES, WHY_US, MEDIA } from "@/lib/constants";
import Marquee from "@/components/Marquee";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function HomePage() {
  return (
    <div data-testid="home-page">
      {/* ========= HERO ========= */}
      <section className="relative bg-white overflow-hidden pt-12 md:pt-16 pb-16 md:pb-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="inline-block w-10 h-[2px] bg-cmyk-magenta"></span>
                <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-black/60">
                  Roll Form Label Manufacturer · Mohali
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] tracking-tighter leading-[0.9] font-semibold text-balance"
              >
                Precision
                <br />
                in every
                <br />
                <span className="relative inline-block">
                  <span className="text-cmyk-magenta">print</span>
                  <span className="absolute -right-6 top-0 w-4 h-4 bg-cmyk-yellow hidden md:block"></span>
                </span>
                <span className="text-cmyk-cyan">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 text-base md:text-lg text-black/70 max-w-xl leading-relaxed"
              >
                DADA PRINT ART manufactures high-quality roll form sticker labels for
                pharmaceuticals, FMCG, cosmetics, F&amp;B and pesticides — with 1,00,000 sq.
                meters/month spare capacity, ready to ship.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  data-testid="hero-cta-quote"
                  className="group inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-cmyk-magenta transition-all duration-300"
                >
                  Request a quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  data-testid="hero-cta-services"
                  className="group inline-flex items-center gap-3 border border-black/20 px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:border-[#0A0A0A] transition-all duration-300"
                >
                  Explore capabilities
                  <ArrowUpRight size={16} className="group-hover:rotate-12 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-black/50"
              >
                <span>Self-Adhesive</span>
                <span className="w-1 h-1 bg-black/30"></span>
                <span>Die-Cut</span>
                <span className="w-1 h-1 bg-black/30"></span>
                <span>Foil Stamping</span>
                <span className="w-1 h-1 bg-black/30"></span>
                <span>UV / Lamination</span>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <img
                  src={MEDIA.machine1}
                  alt="Industrial printing press"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-5 border-l-4 border-cmyk-magenta">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-black/50">
                    State-of-the-art
                  </div>
                  <div className="font-heading font-semibold text-lg mt-1">
                    Label Printing Machine
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-1">
                  <span className="w-3 h-3 bg-cmyk-cyan"></span>
                  <span className="w-3 h-3 bg-cmyk-magenta"></span>
                  <span className="w-3 h-3 bg-cmyk-yellow"></span>
                  <span className="w-3 h-3 bg-[#0A0A0A]"></span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= MARQUEE ========= */}
      <Marquee
        items={[
          "Precision in Every Print",
          "Roll Form Sticker Labels",
          "Foil Stamping",
          "UV Finishing",
          "Lamination",
          "Die-Cut Excellence",
        ]}
      />

      {/* ========= STATS / ABOUT TEASER ========= */}
      <section className="bg-[#F8F9FA] py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-cmyk-cyan"></span>
                Who we are
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1] font-semibold text-balance">
                A label partner built on <span className="text-cmyk-magenta">trust</span>, precision & speed.
              </h2>
              <p className="mt-8 text-black/70 leading-relaxed max-w-lg">
                Established with a passion for precision and print excellence, we serve a
                wide range of industries with consistent quality, quick turnaround and deeply
                personalised service.
              </p>
              <Link
                to="/about"
                data-testid="home-about-cta"
                className="mt-8 inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs font-semibold border-b-2 border-[#0A0A0A] pb-1 hover:text-cmyk-magenta hover:border-cmyk-magenta transition-colors"
              >
                About DADA PRINT ART
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-7 grid grid-cols-2 gap-[2px] bg-black/10">
              {[
                { k: "1,00,000", u: "sq. meters", l: "Spare capacity / month" },
                { k: "5+", u: "", l: "Core industries served" },
                { k: "100%", u: "", l: "In-house quality checks" },
                { k: "24/7", u: "", l: "Personalised service" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white p-8 md:p-10 flex flex-col justify-between min-h-[220px]"
                >
                  <div className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tighter font-semibold leading-none">
                    {s.k}
                    {s.u && (
                      <span className="block text-sm uppercase tracking-[0.2em] text-black/50 font-body mt-3">
                        {s.u}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-black/60 mt-6">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========= SERVICES ========= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="mb-16 md:mb-20">
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-cmyk-magenta"></span>
              What we do
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1] font-semibold max-w-3xl text-balance">
                Capabilities built for brands that care about the print.
              </h2>
              <Link
                to="/services"
                className="shrink-0 inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs font-semibold border-b-2 border-[#0A0A0A] pb-1 hover:text-cmyk-magenta hover:border-cmyk-magenta transition-colors"
                data-testid="home-services-cta"
              >
                All capabilities <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-black/10">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-white p-8 md:p-10 group hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[260px]"
                data-testid={`service-card-${i}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold px-2 py-1 border border-current">
                      {s.badge}
                    </span>
                    <span className="font-heading text-sm opacity-50">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl tracking-tight leading-tight font-medium mb-4">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-70">{s.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.25em] opacity-60 group-hover:opacity-100">
                  Learn more
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========= INDUSTRIES ========= */}
      <section className="bg-[#0A0A0A] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none"></div>
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="mb-16 md:mb-20 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-cmyk-yellow"></span>
              Industries we serve
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1] font-semibold text-balance">
              Trusted across industries where labels <span className="text-cmyk-yellow">must not fail</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.slice(0, 6).map((ind, i) => (
              <motion.div
                key={ind.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative overflow-hidden border border-white/10 aspect-[4/5]"
                data-testid={`industry-card-${ind.key}`}
              >
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div className="flex items-center justify-between">
                    <span
                      className="w-3 h-3 block"
                      style={{ background: ind.accent }}
                    ></span>
                    <span className="font-heading text-sm text-white/60">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl tracking-tight font-medium mb-3">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                      {ind.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/industries"
              data-testid="home-industries-cta"
              className="group inline-flex items-center gap-3 border border-white/30 px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              Explore all industries
              <ArrowUpRight size={16} className="group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========= WHY US ========= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="mb-16 md:mb-20 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-cmyk-cyan"></span>
              Why partner with us
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1] font-semibold text-balance">
              Six reasons brands choose DADA PRINT ART.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {WHY_US.map((w, i) => {
              const Icon = [Zap, Sparkles, Shield, CheckCircle2, Layers, CheckCircle2][i] || CheckCircle2;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="flex gap-5"
                  data-testid={`why-us-${i}`}
                >
                  <div className="shrink-0 w-12 h-12 bg-[#0A0A0A] text-white flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium mb-2">
                      {w.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed">
                      {w.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========= BIG CTA ========= */}
      <section className="bg-cmyk-yellow text-[#0A0A0A] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[120px] opacity-40 bg-cmyk-magenta"></div>
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <motion.div {...fadeUp} className="lg:col-span-8">
              <div className="text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#0A0A0A]"></span>
                Ready when you are
              </div>
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-semibold text-balance">
                Let's start a conversation about your next label run.
              </h2>
              <p className="mt-6 max-w-xl text-black/70 leading-relaxed">
                Whether you're diversifying suppliers or expanding production, we're equipped and
                eager to deliver — immediately.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                data-testid="home-cta-call"
                className="text-3xl md:text-4xl font-heading font-semibold tracking-tight hover:text-cmyk-magenta transition-colors"
              >
                {COMPANY.phone}
              </a>
              <Link
                to="/contact"
                data-testid="home-cta-contact"
                className="inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
              >
                Request a quote
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
