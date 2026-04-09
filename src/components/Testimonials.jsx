import { motion } from 'framer-motion';

const reviews = [
  { quote: "The images were nothing short of cinematic. We felt like movie stars on our wedding day. Every tear, every smile — preserved flawlessly.", author: "Eleanor & James", location: "Lake Como, Italy", service: "Wedding" },
  { quote: "A true master of light and shadow. Every frame from our outdoor shoot is a work of art we'll treasure for generations.", author: "Vogue Paris", location: "Editorial", service: "Editorial" },
  { quote: "The outdoor portrait session in the mountains was beyond anything we could have imagined. Pure, breathtaking magic.", author: "Sophia & Marcus", location: "Swiss Alps", service: "Outdoor Shoots" },
  { quote: "From pre-wedding shoot to final delivery, the experience was seamless. The photos tell our love story perfectly.", author: "Aria & Daniel", location: "Santorini, Greece", service: "Pre-Wedding" },
];

const Stars = () => (
  <div className="flex gap-[3px] mb-5">
    {[0,1,2,3,4].map(i => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C9A96E">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Dot pattern bg */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,169,110,0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} 
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[#C9A96E] text-[0.65rem] tracking-[0.3em] uppercase mb-3">
            Client Love
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#F5F5F5]">
            Words of <em className="text-[#C9A96E] italic">Praise</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white/[0.025] border border-white/[0.06] p-8 transition-colors duration-400 hover:border-[#C9A96E]/30"
            >
              <Stars />
              <p className="font-heading text-[#ccc] italic leading-relaxed text-[0.95rem] mb-6 font-normal">
                "{r.quote}"
              </p>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <p className="font-body text-[#F5F5F5] text-[0.8rem] tracking-[0.08em] uppercase">{r.author}</p>
                  <p className="font-body text-[#666] text-[0.7rem] mt-1">{r.location}</p>
                </div>
                <span className="font-body text-[0.6rem] tracking-[0.15em] uppercase border border-[#C9A96E]/20 text-[#C9A96E] py-1 px-2.5 whitespace-nowrap">
                  {r.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
