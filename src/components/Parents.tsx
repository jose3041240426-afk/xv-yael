import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GoldWaxSeal = ({ initials }: { initials: string }) => (
  <div className="relative w-16 h-16 flex items-center justify-center -mt-8 select-none">
    {/* Inner and outer irregular wax borders */}
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_10px_rgba(166,124,30,0.45)]">
      <defs>
        <radialGradient id="gold-wax" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3E5AB" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A640F" />
        </radialGradient>
      </defs>
      {/* Outer seal shape */}
      <path
        d="M50 4 C 65 3, 80 12, 88 28 C 96 44, 98 62, 88 78 C 78 94, 60 98, 44 96 C 28 94, 12 84, 6 68 C 0 52, 4 34, 14 18 C 24 2, 35 5, 50 4"
        fill="url(#gold-wax)"
      />
      {/* Inner stamp ring */}
      <circle cx="50" cy="50" r="34" fill="none" stroke="#6F4E07" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="#F3E5AB" strokeWidth="1.2" opacity="0.4" />
      {/* Inner stamp fill */}
      <circle cx="50" cy="50" r="30" fill="#B08D2C" opacity="0.25" />
    </svg>
    {/* Monogram letters */}
    <span className="absolute font-script text-white text-xl font-bold tracking-tighter drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] leading-none select-none">
      {initials}
    </span>
  </div>
);

export default function Parents() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 w-full flex flex-col items-center justify-center bg-black relative select-none px-6">
      
      {/* Container matching Canva container shape but styled in luxury navy-gold */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative w-full max-w-sm border border-gold/15 bg-[#030a16]/40 backdrop-blur-md flex flex-col items-center pt-12 pb-16 px-6 shadow-[0_0_25px_rgba(212,175,55,0.05)]"
      >
        {/* Wax Seal centered on the top border */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <GoldWaxSeal initials="YA" />
        </div>

        {/* Parents Group */}
        <div className="flex flex-col items-center text-center mt-4">
          <h2 className="font-script text-3xl text-gradient-gold mb-2 font-medium">
            Mis Padres
          </h2>
          <p className="font-cinzel text-xs md:text-sm tracking-widest text-white/95 uppercase font-light leading-relaxed">
            Arizett Inés López C.
            <br />
            Jesús Iván Medina C.
          </p>
        </div>

        {/* Elegant spacer dot/line */}
        <div className="w-12 h-px bg-gold/25 my-8" />

        {/* Sponsors Group */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-script text-3xl text-gradient-gold mb-2 font-medium">
            Mis Padrinos
          </h2>
          <p className="font-cinzel text-xs md:text-sm tracking-widest text-white/95 uppercase font-light leading-relaxed">
            Alejandra Maythe López C.
            <br />
            Misael González Díaz
          </p>
        </div>

        {/* Delicate corners */}
        <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold/20" />
        <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-gold/20" />
        <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-gold/20" />
        <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold/20" />

      </motion.div>
      
    </section>
  );
}


