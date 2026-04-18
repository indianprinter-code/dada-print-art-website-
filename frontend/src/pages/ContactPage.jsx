import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { COMPANY, INDUSTRIES } from "@/lib/constants";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INITIAL_QUOTE = {
  company: "",
  name: "",
  email: "",
  phone: "",
  industry: "",
  label_type: "",
  quantity: "",
  details: "",
};

const INITIAL_CONTACT = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [tab, setTab] = useState("quote");
  const [quote, setQuote] = useState(INITIAL_QUOTE);
  const [contact, setContact] = useState(INITIAL_CONTACT);
  const [loading, setLoading] = useState(false);

  const submitQuote = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/quote`, quote);
      toast.success("Quote request sent! We'll reach out within 24 hours.");
      setQuote(INITIAL_QUOTE);
    } catch (err) {
      toast.error(
        err.response?.data?.detail?.[0]?.msg ||
          "Could not submit your request. Please try again or email us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  const submitContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, contact);
      toast.success("Message sent! We'll get back to you soon.");
      setContact(INITIAL_CONTACT);
    } catch (err) {
      toast.error(
        err.response?.data?.detail?.[0]?.msg ||
          "Could not send your message. Please try again or email us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <PageHeader
        overline="Let's start a conversation"
        title={
          <>
            Tell us about your <span className="text-cmyk-cyan">next label run</span>.
          </>
        }
        subtitle="Request a quote, ask a question, or just say hello. A real person will get back to you — usually within one business day."
        accent="#00B4F0"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-6 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-cmyk-magenta"></span>
              Reach us directly
            </div>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tighter leading-[1] font-semibold mb-10">
              Fast, personal, no-nonsense.
            </h2>

            <ul className="space-y-8">
              <li className="flex gap-4" data-testid="contact-info-address">
                <div className="shrink-0 w-12 h-12 bg-[#0A0A0A] text-white flex items-center justify-center">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-black/50 mb-2">
                    Visit us
                  </div>
                  <div className="leading-relaxed text-black/80">{COMPANY.address}</div>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  data-testid="contact-info-phone"
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-12 h-12 bg-cmyk-magenta text-white flex items-center justify-center group-hover:bg-[#0A0A0A] transition-colors">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-black/50 mb-2">
                      Call us
                    </div>
                    <div className="font-heading text-xl group-hover:text-cmyk-magenta transition-colors">
                      {COMPANY.phone}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  data-testid="contact-info-email"
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-12 h-12 bg-cmyk-cyan text-white flex items-center justify-center group-hover:bg-[#0A0A0A] transition-colors">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-black/50 mb-2">
                      Email us
                    </div>
                    <div className="font-heading text-xl group-hover:text-cmyk-cyan transition-colors break-all">
                      {COMPANY.email}
                    </div>
                  </div>
                </a>
              </li>
            </ul>

            <div className="mt-12 p-6 bg-cmyk-yellow text-[#0A0A0A]">
              <div className="text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">
                Spare capacity available
              </div>
              <div className="font-heading text-3xl tracking-tighter font-semibold leading-tight">
                3,00,000+ sq. m/month ready to ship.
              </div>
            </div>
          </motion.div>

          {/* Forms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <div className="flex gap-0 mb-8 border border-black/15">
              <button
                data-testid="tab-quote"
                onClick={() => setTab("quote")}
                className={`flex-1 text-xs uppercase tracking-[0.25em] font-semibold py-4 transition-all ${
                  tab === "quote"
                    ? "bg-[#0A0A0A] text-white"
                    : "bg-white text-black/60 hover:text-black"
                }`}
              >
                Request a Quote
              </button>
              <button
                data-testid="tab-contact"
                onClick={() => setTab("contact")}
                className={`flex-1 text-xs uppercase tracking-[0.25em] font-semibold py-4 transition-all ${
                  tab === "contact"
                    ? "bg-[#0A0A0A] text-white"
                    : "bg-white text-black/60 hover:text-black"
                }`}
              >
                General Enquiry
              </button>
            </div>

            {tab === "quote" ? (
              <form onSubmit={submitQuote} className="space-y-6" data-testid="quote-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Company Name *" testId="quote-company">
                    <input
                      required
                      type="text"
                      value={quote.company}
                      onChange={(e) => setQuote({ ...quote, company: e.target.value })}
                      className="input-brand"
                      data-testid="quote-input-company"
                    />
                  </Field>
                  <Field label="Your Name *" testId="quote-name">
                    <input
                      required
                      type="text"
                      value={quote.name}
                      onChange={(e) => setQuote({ ...quote, name: e.target.value })}
                      className="input-brand"
                      data-testid="quote-input-name"
                    />
                  </Field>
                  <Field label="Email *" testId="quote-email">
                    <input
                      required
                      type="email"
                      value={quote.email}
                      onChange={(e) => setQuote({ ...quote, email: e.target.value })}
                      className="input-brand"
                      data-testid="quote-input-email"
                    />
                  </Field>
                  <Field label="Phone *" testId="quote-phone">
                    <input
                      required
                      type="tel"
                      value={quote.phone}
                      onChange={(e) => setQuote({ ...quote, phone: e.target.value })}
                      className="input-brand"
                      data-testid="quote-input-phone"
                    />
                  </Field>
                  <Field label="Industry *" testId="quote-industry">
                    <select
                      required
                      value={quote.industry}
                      onChange={(e) => setQuote({ ...quote, industry: e.target.value })}
                      className="input-brand"
                      data-testid="quote-input-industry"
                    >
                      <option value="">Select industry</option>
                      {INDUSTRIES.map((i) => (
                        <option key={i.key} value={i.title}>
                          {i.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                  <Field label="Label Type *" testId="quote-label-type">
                    <input
                      required
                      type="text"
                      value={quote.label_type}
                      onChange={(e) => setQuote({ ...quote, label_type: e.target.value })}
                      placeholder="e.g. Self-adhesive, Die-cut, Foil stamped"
                      className="input-brand"
                      data-testid="quote-input-label-type"
                    />
                  </Field>
                </div>
                <Field label="Estimated Quantity" testId="quote-quantity">
                  <input
                    type="text"
                    value={quote.quantity}
                    onChange={(e) => setQuote({ ...quote, quantity: e.target.value })}
                    placeholder="e.g. 50,000 pcs / month"
                    className="input-brand"
                    data-testid="quote-input-quantity"
                  />
                </Field>
                <Field label="Project Details" testId="quote-details">
                  <textarea
                    rows={5}
                    value={quote.details}
                    onChange={(e) => setQuote({ ...quote, details: e.target.value })}
                    placeholder="Tell us about your requirements — substrate, finishes, delivery timeline…"
                    className="input-brand resize-none"
                    data-testid="quote-input-details"
                  />
                </Field>

                <SubmitButton loading={loading} label="Submit quote request" testId="quote-submit" />
              </form>
            ) : (
              <form onSubmit={submitContact} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Your Name *" testId="contact-name">
                    <input
                      required
                      type="text"
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                      className="input-brand"
                      data-testid="contact-input-name"
                    />
                  </Field>
                  <Field label="Email *" testId="contact-email">
                    <input
                      required
                      type="email"
                      value={contact.email}
                      onChange={(e) => setContact({ ...contact, email: e.target.value })}
                      className="input-brand"
                      data-testid="contact-input-email"
                    />
                  </Field>
                  <Field label="Phone" testId="contact-phone">
                    <input
                      type="tel"
                      value={contact.phone}
                      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      className="input-brand"
                      data-testid="contact-input-phone"
                    />
                  </Field>
                  <Field label="Subject" testId="contact-subject">
                    <input
                      type="text"
                      value={contact.subject}
                      onChange={(e) => setContact({ ...contact, subject: e.target.value })}
                      className="input-brand"
                      data-testid="contact-input-subject"
                    />
                  </Field>
                </div>
                <Field label="Message *" testId="contact-message">
                  <textarea
                    required
                    rows={6}
                    value={contact.message}
                    onChange={(e) => setContact({ ...contact, message: e.target.value })}
                    className="input-brand resize-none"
                    data-testid="contact-input-message"
                  />
                </Field>
                <SubmitButton loading={loading} label="Send message" testId="contact-submit" />
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#F8F9FA] py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-4 flex items-center gap-3">
              <span className="w-6 h-[2px] bg-cmyk-yellow"></span>
              Where to find us
            </div>
            <h2 className="font-heading text-3xl md:text-5xl tracking-tighter leading-[1] font-semibold">
              Our factory in Mohali, Punjab.
            </h2>
          </div>
          <div className="aspect-[16/9] w-full border border-black/10 overflow-hidden" data-testid="contact-map">
            <iframe
              title="DADA PRINT ART location"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                COMPANY.mapQuery
              )}&output=embed`}
            />
          </div>
        </div>
      </section>

      <style>{`
        .input-brand {
          width: 100%;
          background: #F8F9FA;
          border: 1px solid rgba(0,0,0,0.12);
          padding: 1rem 1.1rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          color: #0A0A0A;
          transition: border-color 0.2s ease, background 0.2s ease;
          outline: none;
          border-radius: 0;
        }
        .input-brand:focus {
          border-color: #0A0A0A;
          background: #FFFFFF;
        }
        .input-brand::placeholder {
          color: rgba(0,0,0,0.35);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children, testId }) {
  return (
    <label className="block" data-testid={`field-${testId}`}>
      <span className="block text-[10px] uppercase tracking-[0.25em] font-semibold text-black/60 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function SubmitButton({ loading, label, testId }) {
  return (
    <button
      type="submit"
      disabled={loading}
      data-testid={testId}
      className="group inline-flex items-center gap-3 bg-[#0A0A0A] text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-cmyk-magenta transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Sending…
        </>
      ) : (
        <>
          {label}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  );
}
