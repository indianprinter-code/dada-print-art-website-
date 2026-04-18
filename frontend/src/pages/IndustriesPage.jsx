import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { INDUSTRIES } from "@/lib/constants";

export default function IndustriesPage() {
  return (
    <div data-testid="industries-page">
      <PageHeader
        overline="Industries we serve"
        title={
          <>
            Labels for the <span className="text-cmyk-yellow">industries</span> that demand more.
          </>
        }
        subtitle="Every industry has its own compliance, substrate and branding requirements. We design each label around those realities — not around a one-size-fits-all template."
        accent="#FFD100"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-[1px] bg-black/10">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.04 }}
                className="bg-white grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[400px] group"
                data-testid={`industries-row-${ind.key}`}
              >
                <div
                  className={`lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className="absolute top-6 left-6 w-4 h-4 block"
                    style={{ background: ind.accent }}
                  ></span>
                </div>
                <div
                  className={`lg:col-span-7 p-10 md:p-16 flex flex-col justify-center ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-heading text-black/40 text-sm">0{i + 1}</span>
                    <span
                      className="h-[2px] w-12"
                      style={{ background: ind.accent }}
                    ></span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-black/50 font-semibold">
                      Industry
                    </span>
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1] font-semibold">
                    {ind.title}
                  </h2>
                  <p className="mt-6 text-black/70 leading-relaxed max-w-xl text-base md:text-lg">
                    {ind.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {["Compliant", "Durable", "Premium Finish", "Fast TAT"].map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-[0.25em] font-semibold px-3 py-2 border border-black/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full blur-[120px] opacity-40 bg-cmyk-cyan"></div>
        <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-semibold max-w-4xl mx-auto text-balance">
            Don't see your industry? We'll still nail the brief.
          </h2>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            If it sticks, we can print it. Tell us what you're building and we'll design a label
            workflow around it.
          </p>
          <Link
            to="/contact"
            data-testid="industries-cta-contact"
            className="mt-10 inline-flex items-center gap-3 bg-white text-[#0A0A0A] px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-cmyk-yellow transition-all duration-300"
          >
            Talk to our team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
