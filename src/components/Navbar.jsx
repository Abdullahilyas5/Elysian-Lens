import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = ['Portfolio', 'Services', 'About', 'Testimonials', 'Pricing', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${scrolled ? 'bg-[#0B0B0B]/90 py-3 border-b border-[#C9A96E]/10' : 'bg-[#0B0B0B]/50 py-5 border-b border-transparent'}`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="font-heading text-xl font-bold text-[#C9A96E] tracking-[0.22em] shrink-0"
          >
            ELYSIAN LENS
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-[#C9A96E] text-xs tracking-[0.18em] uppercase transition-colors whitespace-nowrap font-body"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Book Now + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden lg:inline-block font-body text-[0.65rem] tracking-[0.15em] uppercase text-[#C9A96E] border border-[#C9A96E]/50 py-2.5 px-6 transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0B0B0B]"
            >
              Book Now
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-[#F5F5F5] p-1"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/98 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="font-heading text-3xl text-[#F5F5F5] tracking-[0.08em] hover:text-[#C9A96E] transition-colors"
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-4 font-body text-xs tracking-[0.18em] uppercase text-[#C9A96E] border border-[#C9A96E] py-3 px-8"
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
