import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS, LOGO_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0A0A0A] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 grain pointer-events-none"></div>

      {/* Big wordmark */}
      <div className="relative border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 mb-4">
                Let's start a conversation
              </div>
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] font-semibold text-balance max-w-3xl">
                Ready to print <span className="text-cmyk-yellow">something</span> remarkable?
              </h2>
            </div>
            <Link
              to="/contact"
              data-testid="footer-cta"
              className="group inline-flex items-center gap-3 border border-white/30 px-6 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
            >
              Request a quote
              <ArrowUpRight size={16} className="group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={LOGO_URL}
              alt="DADA PRINT ART logo"
              className="h-14 w-auto object-contain"
              style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.1)" }}
            />
            <div className="font-heading font-semibold text-2xl tracking-tight">
              {COMPANY.name}
            </div>
          </div>
          <p className="text-white/70 leading-relaxed max-w-md">
            Precision in Every Print. Trusted manufacturing partner for roll form sticker labels
            across pharmaceuticals, FMCG, cosmetics, F&amp;B and pesticides.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-5">Navigate</div>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  data-testid={`footer-link-${l.label.toLowerCase()}`}
                  className="text-white/80 hover:text-cmyk-yellow transition-colors text-sm"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-5">Reach Us</div>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 mt-0.5 text-cmyk-cyan" />
              <span className="text-white/80 leading-relaxed">{COMPANY.address}</span>
            </li>
            <li>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                data-testid="footer-phone"
                className="flex gap-3 hover:text-cmyk-yellow transition-colors text-white/80"
              >
                <Phone size={18} className="shrink-0 mt-0.5 text-cmyk-magenta" />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                data-testid="footer-email"
                className="flex gap-3 hover:text-cmyk-yellow transition-colors text-white/80 break-all"
              >
                <Mail size={18} className="shrink-0 mt-0.5 text-cmyk-yellow" />
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-[0.25em]">{COMPANY.domain}</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-cmyk-cyan"></span>
              <span className="w-2 h-2 bg-cmyk-magenta"></span>
              <span className="w-2 h-2 bg-cmyk-yellow"></span>
              <span className="w-2 h-2 bg-white"></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
