import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const InstagramIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InfoRow = ({ icon: Icon, label, value, href }) => (
  <a href={href || '#'} className="flex items-start gap-4 group">
    <div className="w-11 h-11 border border-[#C9A96E]/25 flex items-center justify-center shrink-0 group-hover:bg-[#C9A96E]/10 group-hover:border-[#C9A96E]/60 transition-all duration-300">
      <Icon size={16} className="text-[#C9A96E]" />
    </div>
    <div className="pt-1">
      <p className="font-body text-gray-500 text-[0.65rem] tracking-[0.15em] uppercase mb-0.5">{label}</p>
      <p className="font-body text-gray-300 text-sm font-light group-hover:text-[#C9A96E] transition-colors">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0B0B0B] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">

          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <div>
              <p className="font-body text-[#C9A96E] text-xs uppercase tracking-[0.3em] mb-4">Get In Touch</p>
              <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight mb-5">
                Let's Create <span className="text-[#C9A96E] italic">Magic</span>
              </h2>
              <p className="font-body text-gray-400 font-light leading-relaxed text-sm">
                Whether it's a destination wedding, an outdoor portrait session, or a creative editorial — reach out and let's bring your vision to life.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <InfoRow icon={Mail} label="General" value="hello@elysianlens.com" href="mailto:hello@elysianlens.com" />
              <InfoRow icon={Send} label="Bookings" value="bookings@elysianlens.com" href="mailto:bookings@elysianlens.com" />
              <InfoRow icon={Phone} label="Phone" value="+33 1 23 45 67 89" href="tel:+33123456789" />
              <InfoRow icon={MapPin} label="Based In" value="Paris, France — Available Worldwide" />
            </div>

            <div>
              <p className="font-body text-gray-500 text-[0.65rem] uppercase tracking-[0.15em] mb-4">Follow the Journey</p>
              <div className="flex gap-4">
                <a href="#" aria-label="Instagram" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A96E] hover:border-[#C9A96E]/50 transition-all duration-300">
                  <InstagramIcon />
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A96E] hover:border-[#C9A96E]/50 transition-all duration-300">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <form className="bg-white/[0.018] border border-white/[0.06] p-8 md:p-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="field">
                  <input type="text" id="name" placeholder=" " />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="field">
                  <input type="email" id="email" placeholder=" " />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>

              <div className="field">
                <input type="tel" id="phone" placeholder=" " />
                <label htmlFor="phone">Phone Number</label>
              </div>

              <div className="field">
                <select id="service" defaultValue="">
                  <option value="" disabled className="bg-[#0B0B0B]"> </option>
                  <option value="wedding" className="bg-[#0B0B0B]">Wedding Photography</option>
                  <option value="outdoor" className="bg-[#0B0B0B]">Outdoor Shoots</option>
                  <option value="portrait" className="bg-[#0B0B0B]">Portrait Sessions</option>
                  <option value="editorial" className="bg-[#0B0B0B]">Editorial & Fashion</option>
                  <option value="corporate" className="bg-[#0B0B0B]">Corporate & Events</option>
                  <option value="prewedding" className="bg-[#0B0B0B]">Pre-Wedding / Engagement</option>
                  <option value="other" className="bg-[#0B0B0B]">Other / Custom</option>
                </select>
                <label htmlFor="service">Select a Service</label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="field">
                  <input type="text" id="eventdate" placeholder=" " />
                  <label htmlFor="eventdate">Preferred Date</label>
                </div>
                <div className="field">
                  <input type="text" id="location" placeholder=" " />
                  <label htmlFor="location">Event Location</label>
                </div>
              </div>

              <div className="field">
                <textarea id="message" rows="3" placeholder=" "></textarea>
                <label htmlFor="message">Tell Us Your Vision</label>
              </div>

              <button
                type="button"
                className="w-full mt-4 py-4 border border-[#C9A96E] bg-transparent text-[#C9A96E] font-body text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0B0B0B]"
              >
                Send Inquiry
              </button>
              <p className="text-center font-body text-[#555] text-xs tracking-[0.1em]">
                We typically respond within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/33123456789"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>
    </section>
  );
};

export default Contact;
