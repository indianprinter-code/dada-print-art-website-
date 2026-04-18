import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { COMPANY, NAV_LINKS, LOGO_URL } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-black/10"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <img
            src={LOGO_URL}
            alt="DADA PRINT ART logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
          <div className="leading-none hidden sm:block">
            <div className="font-heading font-semibold tracking-tight text-base md:text-lg">
              {COMPANY.name}
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-black/50 mt-1">
              {COMPANY.tagline}
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `link-underline text-sm uppercase tracking-[0.18em] font-medium transition-colors ${
                  isActive ? "text-[#0A0A0A] active" : "text-black/60 hover:text-black"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            data-testid="nav-cta-quote"
            className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-cmyk-magenta transition-colors duration-300"
          >
            Get a Quote
            <span className="w-2 h-2 bg-cmyk-yellow"></span>
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-black/10 bg-white" data-testid="nav-mobile-menu">
          <nav className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.2em] font-medium ${
                    isActive ? "text-[#0A0A0A]" : "text-black/60"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-[#0A0A0A] text-white px-6 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-center"
              data-testid="nav-mobile-cta"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
