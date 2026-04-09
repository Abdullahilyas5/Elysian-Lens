import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '12+',  label: 'Years Experience'   },
  { value: '30+',  label: 'Countries Covered'  },
  { value: '48hr', label: 'Preview Delivery'   },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#111111] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ── Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative w-full h-full max-w-md mx-auto"
          >
            <div className="aspect-[3/4] relative z-10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop"
                alt="Professional Photographer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Gold corner decoration */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-[#C9A96E]/35 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-[#C9A96E]/35 pointer-events-none" />
          </motion.div>

          {/* ── Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div>
              <p className="font-body text-[#C9A96E] text-[0.7rem] tracking-[0.3em] uppercase mb-3">
                About the Artist
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#F5F5F5] leading-tight m-0">
                The <em className="text-[#C9A96E] italic">Vision</em> Behind the Lens
              </h2>
            </div>

            <p className="font-body text-gray-400 font-light leading-relaxed text-sm md:text-base">
              I believe every image should evoke an emotion. My approach is rooted in fine art — capturing the raw, unfiltered essence of human connection in its most beautiful form.
            </p>
            <p className="font-body text-gray-400 font-light leading-relaxed text-sm md:text-base">
              With over a decade of experience across five continents, I specialize in crafting cinematic, timeless stories for those who appreciate the extraordinary. Every session is a deeply personal collaboration.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 mt-2">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-2xl md:text-3xl text-[#C9A96E] mb-1">{s.value}</p>
                  <p className="font-body text-[#555] text-[0.65rem] tracking-[0.1em] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
