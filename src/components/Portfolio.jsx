import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = [
  { label: 'All', filter: 'all' },
  { label: 'Weddings', filter: 'wedding' },
  { label: 'Outdoor', filter: 'outdoor' },
  { label: 'Portraits', filter: 'portrait' },
  { label: 'Editorial', filter: 'editorial' },
];

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop', category: 'wedding',   label: 'Wedding in Tuscany',  cols: 'md:col-span-2', rows: 'md:row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop', category: 'outdoor',   label: 'Alpine Summit',        cols: 'col-span-1', rows: 'row-span-1' },
  { id: 3, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2564&auto=format&fit=crop', category: 'portrait',  label: 'Studio Portrait',      cols: 'col-span-1', rows: 'row-span-1' },
  { id: 4, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2669&auto=format&fit=crop', category: 'wedding',   label: 'Lake Como Ceremony',   cols: 'col-span-1', rows: 'md:row-span-2' },
  { id: 5, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop', category: 'editorial', label: 'Vogue Editorial',      cols: 'col-span-1', rows: 'row-span-1' },
  { id: 6, src: 'https://images.unsplash.com/photo-1504203700686-f21e703e5f1c?q=80&w=2694&auto=format&fit=crop', category: 'outdoor',   label: 'Golden Hour',          cols: 'col-span-1', rows: 'row-span-1' },
  { id: 7, src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2669&auto=format&fit=crop', category: 'wedding',   label: 'First Dance',          cols: 'col-span-1', rows: 'row-span-1' },
  { id: 8, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop', category: 'portrait',  label: 'Natural Light',        cols: 'col-span-1', rows: 'row-span-1' },
];

const FilterTab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`font-body text-[0.65rem] tracking-[0.2em] uppercase pb-1.5 transition-all duration-300 border-b ${active ? 'text-[#C9A96E] border-[#C9A96E]' : 'text-white/35 border-transparent hover:text-[#C9A96E]'}`}
  >
    {label}
  </button>
);

const Portfolio = () => {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ? images : images.filter(i => i.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#0B0B0B]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-[#C9A96E] text-[0.65rem] tracking-[0.3em] uppercase mb-3">
            Selected Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#F5F5F5] mb-8">
            Curated <em className="text-[#C9A96E] italic">Moments</em>
          </h2>

          {/* Filters */}
          <div className="flex gap-6 justify-center flex-wrap">
            {categories.map(c => (
              <FilterTab key={c.filter} label={c.label} active={activeFilter === c.filter} onClick={() => setActiveFilter(c.filter)} />
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelected(img)}
                className={`relative overflow-hidden cursor-pointer group ${img.cols} ${img.rows}`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100 flex items-end p-5">
                  <div>
                    <p className="font-heading text-white text-base md:text-lg">{img.label}</p>
                    <p className="font-body text-[#C9A96E] text-[0.6rem] tracking-[0.15em] uppercase mt-1">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-8 right-8 text-white hover:text-[#C9A96E] transition-colors p-2"
            >
              <X size={32} />
            </button>
            <div onClick={e => e.stopPropagation()} className="max-w-5xl w-full relative">
              <motion.img
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                src={selected.src}
                alt={selected.label}
                className="w-full max-h-[80vh] object-contain block mx-auto"
              />
              <div className="py-4 text-center">
                <p className="font-heading text-[#F5F5F5] text-lg md:text-xl">{selected.label}</p>
                <p className="font-body text-[#C9A96E] text-[0.65rem] tracking-[0.2em] uppercase mt-1.5">{selected.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
