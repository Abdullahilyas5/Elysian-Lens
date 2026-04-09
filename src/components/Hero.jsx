import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2671&auto=format&fit=crop"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-[#0B0B0B]/55"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/30 via-transparent to-[#0B0B0B]/95"></div>
      </div>

      {/* Content  */}
      <div className="relative z-10 text-center px-6 max-w-4xl w-full pt-20">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-body text-[#C9A96E] text-xs tracking-[0.35em] uppercase mb-6"
        >
          Luxury Photography Studio
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-[#F5F5F5] mb-6"
        >
          Capturing Timeless{' '}
          <span className="text-[#C9A96E] italic">Stories</span>
          <br />Through the Lens
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-body text-gray-300 text-sm md:text-base font-light leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Weddings · Outdoor Shoots · Portraits · Editorial<br />
          Elevating your most precious moments into fine art. Based in Paris, available worldwide.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="font-body inline-block border border-[#C9A96E]/70 text-[#C9A96E] py-3 lg:py-4 px-8 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0B0B0B]"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="font-body inline-block bg-[#C9A96E] text-[#0B0B0B] py-3 lg:py-4 px-8 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-[#D4BA89]"
          >
            Book a Session
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-[#C9A96E]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
