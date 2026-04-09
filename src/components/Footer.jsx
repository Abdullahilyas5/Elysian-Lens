import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const InstagramIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#070707] border-t border-white/[0.04]">
      {/* Main */}
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="font-heading text-[1.1rem] font-bold text-[#C9A96E] tracking-[0.22em] uppercase">
              ELYSIAN LENS
            </a>
            <p className="font-body text-[#555] text-[0.8rem] leading-relaxed font-light">
              Luxury photography studio. Based in Paris, available for destination shoots worldwide.
            </p>
            <div className="flex gap-2.5">
              {[<InstagramIcon key="ig" />, <TwitterIcon key="tw" />].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-[#555] transition-all duration-300 hover:text-[#C9A96E] hover:border-[#C9A96E]/40">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-body text-[0.65rem] tracking-[0.18em] uppercase text-[#F5F5F5] mb-5">Services</p>
            <div className="flex flex-col gap-3">
              {['Wedding Photography', 'Outdoor Shoots', 'Portrait Sessions', 'Editorial & Fashion', 'Corporate & Events', 'Pre-Wedding Sessions'].map(s => (
                <a key={s} href="#services" className="font-body text-[#555] text-[0.82rem] font-light transition-colors hover:text-[#C9A96E]">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-[0.65rem] tracking-[0.18em] uppercase text-[#F5F5F5] mb-5">Explore</p>
            <div className="flex flex-col gap-3">
              {[['Portfolio', '#portfolio'], ['Services', '#services'], ['About', '#about'], ['Testimonials', '#testimonials'], ['Pricing', '#pricing'], ['Contact', '#contact']].map(([l, h]) => (
                <a key={l} href={h} className="font-body text-[#555] text-[0.82rem] font-light transition-colors hover:text-[#C9A96E]">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[0.65rem] tracking-[0.18em] uppercase text-[#F5F5F5] mb-5">Contact</p>
            <div className="flex flex-col gap-3.5">
              {[
                { icon: <Mail size={13} className="text-[#C9A96E]" />, text: 'hello@elysianlens.com',    href: 'mailto:hello@elysianlens.com' },
                { icon: <Mail size={13} className="text-[#C9A96E]" />, text: 'bookings@elysianlens.com', href: 'mailto:bookings@elysianlens.com' },
                { icon: <Phone size={13} className="text-[#C9A96E]" />, text: '+33 1 23 45 67 89',       href: 'tel:+33123456789' },
                { icon: <MapPin size={13} className="text-[#C9A96E]" />, text: 'Paris, France',           href: null },
              ].map((c, i) => (
                c.href
                  ? <a key={i} href={c.href} className="flex items-center gap-2.5 font-body text-[#555] text-[0.82rem] font-light transition-colors hover:text-[#C9A96E]">{c.icon}{c.text}</a>
                  : <div key={i} className="flex items-center gap-2.5 font-body text-[#555] text-[0.82rem] font-light">{c.icon}{c.text}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="container mx-auto px-6 max-w-7xl py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[#444] text-[0.72rem] font-light">
            © {year} Elysian Lens. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a key={t} href="#" className="font-body text-[#444] text-[0.72rem] font-light hover:text-[#777] transition-colors">{t}</a>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-[#555] transition-all duration-300 hover:text-[#C9A96E] hover:border-[#C9A96E]/40"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
