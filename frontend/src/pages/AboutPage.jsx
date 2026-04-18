import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { MEDIA, WHY_US } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      <PageHeader
        overline="About DADA PRINT ART"
        title={
          <>
            Built on <span className="text-cmyk-yellow">precision</span>, driven by{" "}
            <span className="text-cmyk-magenta">partnership</span>.
          </>
        }
        subtitle="Established with a passion for precision and print excellence — DADA PRINT ART is a leading manufacturer of high-quality roll form sticker labels serving brands across India."
        accent="#E6007E"
      />

      {/* Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-cmyk-cyan"></span>
              Our story
            </div>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tighter leading-[1] font-semibold">
              A passion for precision, powered by industry expertise.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="lg:col-span-7 space-y-6 text-black/70 text-base md:text-lg leading-relaxed">
            <p>
              Established with a passion for precision and print excellence, DADA PRINT ART has
              grown into a trusted manufacturer of high-quality roll form sticker labels — serving
              pharmaceuticals, FMCG, cosmetics, food &amp; beverages and pesticides.
            </p>
            <p>
              Driven by innovation and powered by industry expertise, we have earned the trust of
              our clients through consistent quality, quick turnaround times, and deeply personalised
              customer service. Every project — big or small — is treated like a partnership.
            </p>
            <p>
              With the recent addition of a state-of-the-art label printing machine, we have
              significantly enhanced our production capacity and precision capabilities — putting
              <strong className="text-[#0A0A0A]"> 1,00,000 sq. meters of spare monthly capacity </strong>
              at our clients' disposal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-[#F8F9FA] py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="mb-16 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-cmyk-magenta"></span>
              Infrastructure & Capacity
            </div>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tighter leading-[1] font-semibold text-balance">
              State-of-the-art label printing, ready to scale.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div {...fadeUp} className="relative aspect-[4/3] overflow-hidden bg-[#F1F3F5]">
              <img
                src={MEDIA.machine2}
                alt="NICKEL FS350 label printing machine"
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 border-l-4 border-cmyk-cyan max-w-xs">
                <div className="text-[10px] uppercase tracking-[0.25em] text-black/50">
                  Production
                </div>
                <div className="font-heading font-semibold text-xl mt-1">
                  1,00,000 sq. m/month
                </div>
                <div className="text-xs text-black/60 mt-1">NICKEL FS350 · spare capacity available now</div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="flex flex-col justify-center">
              <div className="grid grid-cols-1 gap-[1px] bg-black/10">
                {[
                  {
                    t: "Advanced machinery",
                    d: "Recently upgraded with a state-of-the-art label printing press for superior registration and colour consistency.",
                  },
                  {
                    t: "Streamlined workflows",
                    d: "End-to-end workflows that compress lead times without compromising quality.",
                  },
                  {
                    t: "Scalable volumes",
                    d: "Immediate absorption of new volume with a huge spare capacity buffer every month.",
                  },
                  {
                    t: "Tight quality loops",
                    d: "Multiple in-line and offline QC checkpoints to catch issues before they leave the press.",
                  },
                ].map((x, i) => (
                  <div key={i} className="bg-white p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <span className="font-heading text-black/40 text-sm mt-1">0{i + 1}</span>
                      <div>
                        <h3 className="font-heading text-xl font-medium mb-2">{x.t}</h3>
                        <p className="text-sm text-black/60 leading-relaxed">{x.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-cmyk-yellow"></span>
              Quality Assurance
            </div>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tighter leading-[1] font-semibold">
              Every label goes through stringent checks — without exception.
            </h2>
            <p className="mt-6 text-black/70 leading-relaxed">
              We follow best practices in print registration, colour management and adhesive
              selection to ensure durability, consistency and aesthetic appeal.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {WHY_US.map((w) => (
              <div key={w.title} className="flex gap-4">
                <CheckCircle2 size={22} className="shrink-0 mt-1 text-cmyk-magenta" />
                <div>
                  <h3 className="font-heading text-lg font-medium mb-1">{w.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{w.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
