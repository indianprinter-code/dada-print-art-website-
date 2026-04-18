import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { SERVICES, MEDIA } from "@/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

const CAPABILITIES = [
  "Self-adhesive roll form sticker labels",
  "Custom die-cut shapes & sizes",
  "Multicolour CMYK + spot colour printing",
  "Hot & cold foil stamping",
  "UV & spot UV finishing",
  "Gloss, matte & soft-touch lamination",
  "Embossing and debossing",
  "Variable data & sequential numbering",
  "Barcodes, QR codes & track-and-trace",
  "Food-safe, chemical-resistant substrates",
  "Tamper-evident & security features",
  "Custom adhesive selection",
];

export default function ServicesPage() {
  return (
    <div data-testid="services-page">
      <PageHeader
        overline="Services & Capabilities"
        title={
          <>
            Everything you need, <span className="text-cmyk-cyan">under one roof</span>.
          </>
        }
        subtitle="From substrate selection to specialty finishes, we handle the full spectrum of roll form label manufacturing — with the machinery, expertise and capacity to deliver at scale."
        accent="#00B4F0"
      />

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <motion.div {...fadeUp} className="mb-16 max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-cmyk-magenta"></span>
              Core offerings
            </div>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tighter leading-[1] font-semibold text-balance">
              Six capability pillars that power every project.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-black/10">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="bg-white p-8 md:p-10 group hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 min-h-[260px] flex flex-col justify-between"
                data-testid={`services-card-${i}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold px-2 py-1 border border-current">
                      {s.badge}
                    </span>
                    <span className="font-heading text-sm opacity-50">0{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl tracking-tight leading-tight font-medium mb-4">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-70">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section className="bg-[#F8F9FA] py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-cmyk-yellow"></span>
              Detailed capabilities
            </div>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tighter leading-[1] font-semibold">
              A full toolkit for label design & production.
            </h2>
            <p className="mt-6 text-black/70 leading-relaxed">
              Every item below is produced in-house. We combine them in creative ways to match
              your brand, your compliance needs and your supply chain realities.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="lg:col-span-7">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-black/10 border border-black/10">
              {CAPABILITIES.map((cap) => (
                <li
                  key={cap}
                  className="bg-white px-6 py-5 text-sm flex items-center gap-4"
                  data-testid={`capability-${cap.slice(0, 15)}`}
                >
                  <span className="w-2 h-2 bg-cmyk-magenta shrink-0"></span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="relative aspect-[4/3] overflow-hidden">
              <img
                src={MEDIA.machine1}
                alt="Printing press"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-1">
                <span className="w-3 h-3 bg-cmyk-cyan"></span>
                <span className="w-3 h-3 bg-cmyk-magenta"></span>
                <span className="w-3 h-3 bg-cmyk-yellow"></span>
                <span className="w-3 h-3 bg-[#0A0A0A]"></span>
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
                <span className="w-6 h-[2px] bg-cmyk-cyan"></span>
                Technology
              </div>
              <h2 className="font-heading text-4xl md:text-5xl tracking-tighter leading-[1] font-semibold text-balance">
                Presses tuned for precision, finishes tuned for impact.
              </h2>
              <p className="mt-6 text-black/70 leading-relaxed">
                Our facility now runs on advanced label printing machinery that delivers tighter
                registration, richer colours and faster make-readies — so your jobs ship on time,
                every time.
              </p>
              <Link
                to="/contact"
                data-testid="services-cta-contact"
                className="mt-8 inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-cmyk-magenta transition-all duration-300"
              >
                Start a project
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
