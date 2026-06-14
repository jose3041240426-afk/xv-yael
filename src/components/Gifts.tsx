import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EnvelopeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-gold stroke-[2.2] fill-none mb-3">
    <rect x="15" y="28" width="70" height="44" rx="2" />
    <path d="M15 28 L50 55 L85 28" />
  </svg>
);

export default function Gifts() {
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
          Regalos
        </h2>
        
        <EnvelopeIcon />
        
        <p className="font-cinzel text-xs tracking-[0.2em] text-white/90 uppercase font-bold mt-2">
          "Lluvia de sobres"
        </p>
        
        <p className="font-sans font-light text-white/45 text-[10px] md:text-xs tracking-wider mt-3 uppercase max-w-[280px] leading-relaxed">
          Agradecemos tu presencia y si deseas obsequiarnos un detalle, el día del evento contaremos con una urna para depositar tu sobre.
        </p>
      </motion.div>
    </section>
  );
}


