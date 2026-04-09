import { motion } from 'framer-motion';

const services = [
  { icon: '💍', title: 'Wedding Photography',       desc: 'Capturing every intimate moment of your special day with cinematic elegance — from ceremony to reception, every emotion preserved forever.' },
  { icon: '🏔️', title: 'Outdoor Shoots',             desc: 'Golden hour landscapes, mountain vistas, coastal magic. Your story told against the world\'s most stunning natural backdrops.' },
  { icon: '🎭', title: 'Portrait Sessions',           desc: 'Individual and family portraits crafted with intention. Studio or on-location — we sculpt light to reveal your most authentic self.' },
  { icon: '✨', title: 'Editorial & Fashion',         desc: 'High-fashion editorial work for magazines, brands, and lookbooks. Bold concepts brought to life through meticulous creative direction.' },
  { icon: '🎪', title: 'Corporate & Events',          desc: 'Professional coverage for galas, product launches, conferences, and corporate milestones. Polished imagery that elevates your brand.' },
  { icon: '💑', title: 'Pre-Wedding / Engagement',    desc: 'Romantic sessions designed to tell your love story before the big day. Intimate couple shoots and adventure elopements worldwide.' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[#C9A96E] text-[0.65rem] tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#F5F5F5]">
            Our <em className="text-[#C9A96E] italic">Services</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0B0B0B] border border-white/5 p-10 transition-colors duration-400 hover:border-[#C9A96E]/35 cursor-default group"
            >
              <div className="w-12 h-12 border border-[#C9A96E]/25 flex items-center justify-center text-xl mb-6">
                {s.icon}
              </div>
              <h3 className="font-heading text-[1.15rem] text-[#F5F5F5] mb-3 font-normal">
                {s.title}
              </h3>
              <p className="font-body text-[#777] text-[0.85rem] leading-relaxed font-light">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="font-body text-[#555] text-sm font-light mb-6">
            Don't see what you need? We create custom packages for every occasion.
          </p>
          <a
            href="#contact"
            className="font-body inline-block border border-[#C9A96E]/45 text-[#C9A96E] py-3.5 px-10 text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#C9A96E] hover:text-[#0B0B0B] hover:border-[#C9A96E]"
          >
            Discuss Your Vision
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
