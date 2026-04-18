import { motion } from "framer-motion";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { MEDIA } from "@/lib/constants";

const GALLERY = [
  {
    img: MEDIA.labels[0],
    title: "Roll Form Stickers",
    category: "Self-Adhesive",
    accent: "#E6007E",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    img: MEDIA.cosmeticsAlt,
    title: "Cosmetics Bottle Labels",
    category: "Cosmetics",
    accent: "#FFD100",
    span: "md:col-span-4",
  },
  {
    img: MEDIA.pharmaAlt,
    title: "Pharma Vials & Ampoules",
    category: "Pharmaceuticals",
    accent: "#00B4F0",
    span: "md:col-span-4",
  },
  {
    img: MEDIA.beverage,
    title: "Beverage Bottles",
    category: "Food & Beverage",
    accent: "#E6007E",
    span: "md:col-span-6",
  },
  {
    img: MEDIA.labels[1],
    title: "Multicolour Die-Cut",
    category: "Die-Cut",
    accent: "#FFD100",
    span: "md:col-span-6",
  },
  {
    img: MEDIA.machine1,
    title: "NICKEL FS350 Press",
    category: "Production",
    accent: "#00B4F0",
    span: "md:col-span-8",
    light: true,
  },
  {
    img: MEDIA.fmcg,
    title: "FMCG Packaging",
    category: "FMCG",
    accent: "#FFD100",
    span: "md:col-span-4",
  },
];

const CATEGORIES = ["All", "Self-Adhesive", "Cosmetics", "Pharmaceuticals", "Food & Beverage", "Die-Cut", "Production", "FMCG"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const items = GALLERY.filter((g) => active === "All" || g.category === active);

  return (
    <div data-testid="gallery-page">
      <PageHeader
        overline="Gallery & Portfolio"
        title={
          <>
            A small slice of what we <span className="text-cmyk-magenta">make</span>.
          </>
        }
        subtitle="Labels, packaging and production moments — pulled from our everyday work across industries."
        accent="#E6007E"
      />

      {/* Filter bar */}
      <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-black/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-5 flex gap-3 overflow-x-auto">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              data-testid={`gallery-filter-${c}`}
              onClick={() => setActive(c)}
              className={`shrink-0 text-[11px] uppercase tracking-[0.25em] font-semibold px-5 py-3 border transition-all duration-200 ${
                active === c
                  ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                  : "border-black/15 text-black/60 hover:border-[#0A0A0A] hover:text-black"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[260px] md:auto-rows-[320px]">
            {items.map((g, i) => (
              <motion.div
                key={`${active}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
                className={`relative overflow-hidden group ${g.span || "md:col-span-4"} ${
                  g.light ? "bg-[#F1F3F5]" : ""
                }`}
                data-testid={`gallery-item-${i}`}
              >
                <img
                  src={g.img}
                  alt={g.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                    g.light ? "object-contain p-6" : "object-cover"
                  }`}
                />
                {!g.light && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                )}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className="w-3 h-3 block"
                    style={{ background: g.accent }}
                  ></span>
                  <span className={`text-[10px] uppercase tracking-[0.25em] font-semibold ${g.light ? "text-black/70" : "text-white"}`}>
                    {g.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`font-heading text-2xl md:text-3xl tracking-tight font-medium ${g.light ? "text-[#0A0A0A]" : "text-white"}`}>
                    {g.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
