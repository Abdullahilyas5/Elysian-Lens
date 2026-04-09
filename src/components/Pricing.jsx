import { motion } from 'framer-motion';

const packages = [
  {
    name: 'The Intimate',
    subtitle: 'Perfect for small shoots',
    price: '$4,500',
    features: ['4 Hours Coverage', '1 Photographer', '100+ Edited Photos', 'Online Gallery', 'Print-Ready Files', '2 Week Delivery'],
    featured: false,
  },
  {
    name: 'The Signature',
    subtitle: 'Most popular choice',
    price: '$7,800',
    features: ['8 Hours Coverage', '2 Photographers', 'Engagement Session', '300+ Edited Photos', 'Fine Art Album (10×10)', 'Priority Retouching', '1 Week Delivery'],
    featured: true,
  },
  {
    name: 'The Legacy',
    subtitle: 'For those who want everything',
    price: '$12,000',
    features: ['Full Weekend Coverage', 'Creative Direction', '3 Photographers', '500+ Edited Photos', 'Premium Heirloom Album', 'Drone / Aerial Coverage', 'Same-Day Preview'],
    featured: false,
  },
];

const Check = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px]">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[#C9A96E] text-[0.65rem] tracking-[0.3em] uppercase mb-3">
            Investment
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#F5F5F5] mb-3">
            Invest in Your <em className="text-[#C9A96E] italic">Legacy</em>
          </h2>
          <p className="font-body text-[#555] text-sm font-light">
            Every package includes a complimentary consultation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative flex flex-col transition-colors duration-300 ${
                pkg.featured 
                  ? 'border border-[#C9A96E] bg-[#0B0B0B] p-11 pt-12 md:-mt-4 md:mb-[-1rem]' 
                  : 'border border-white/[0.08] bg-transparent p-9'
              }`}
            >
              {/* Badge */}
              {pkg.featured && (
                <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 bg-[#C9A96E] text-[#0B0B0B] font-body text-[0.6rem] tracking-[0.18em] uppercase py-1.5 px-4 font-semibold whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-body text-[0.75rem] tracking-[0.18em] uppercase text-[#F5F5F5] mb-1.5">
                  {pkg.name}
                </h3>
                <p className="font-body text-[#555] text-[0.75rem] font-light">{pkg.subtitle}</p>
              </div>

              <p className="font-heading text-4xl text-[#C9A96E] mb-7 leading-none">
                {pkg.price}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check />
                    <span className="font-body text-[#777] text-[0.82rem] font-light leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3.5 font-body text-[0.65rem] tracking-[0.18em] uppercase transition-all duration-300 ${
                  pkg.featured 
                    ? 'bg-[#C9A96E] text-[#0B0B0B] border border-[#C9A96E] font-medium hover:bg-[#D4BA89]' 
                    : 'bg-transparent text-[#F5F5F5] border border-white/15 font-light hover:border-[#C9A96E] hover:text-[#C9A96E]'
                }`}
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#444] text-xs mt-10 font-body font-light">
          Custom packages available for destination weddings & multi-day events.{' '}
          <a href="#contact" className="text-[#C9A96E] hover:underline">Get in touch</a>.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
