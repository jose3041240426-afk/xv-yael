import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SuitDressIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold stroke-[2] fill-none mb-3">
    {/* Suit Jacket */}
    <path d="M22 25 L40 25 L36 75 L26 75 Z" />
    <path d="M28 25 L31 40 L31 75" />
    <path d="M34 25 L31 40" />
    <path d="M28 32 C 29 32, 33 32, 34 32" />
    <path d="M29 29 L31 31 L33 29" />
    {/* Evening Dress */}
    <path d="M58 28 L62 42 L72 75 L48 75 L52 42 Z" />
    <path d="M50 28 C 55 31, 60 31, 65 28" />
    <path d="M53 40 C 56 42, 59 42, 62 40" />
  </svg>
);

export default function DressCode() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section ref={ref} className="py-20 bg-black text-white w-full flex flex-col items-center justify-center select-none px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="w-full max-w-sm flex flex-col items-center text-center"
      >
        <h2 className="font-script text-4xl text-gradient-gold mb-4 font-medium">
          Dress Code
        </h2>
        
        <SuitDressIcon />
        
        <p className="font-cinzel text-xs tracking-[0.25em] text-white/90 uppercase font-light mt-2">
          Formal
        </p>
        
        <p className="font-sans font-light text-white/45 text-[10px] md:text-xs tracking-wider mt-2 uppercase max-w-[260px] leading-relaxed">
          Traje formal para caballeros y vestido de gala para damas
        </p>
      </motion.div>
    </section>
  );
}


