import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ToastGlassesIcon = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10 stroke-gold stroke-[3] fill-none mb-3">
    <path d="M38 25 L48 45 L48 75 M40 75 L56 75 M35 25 L53 25 L48 45" />
    <path d="M62 25 L52 45 L52 75 M60 75 L44 75 M65 25 L47 25 L52 45" />
    <path d="M50 12 L50 18 M47 15 L53 15" strokeWidth="2.5" />
  </svg>
);

export default function EventDetails() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="py-24 bg-black text-white w-full flex flex-col items-center justify-center select-none px-6">
      <div className="w-full max-w-sm flex flex-col items-center gap-20">
        

        {/* Reception */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.25 }}
          className="flex flex-col items-center text-center w-full"
        >
          {/* Toast glasses icon */}
          <ToastGlassesIcon />
          
          <h2 className="font-script text-4xl text-gradient-gold mb-2 font-medium">
            Recepción
          </h2>
          
          <p className="font-cinzel text-[10px] md:text-xs tracking-[0.2em] text-white/80 uppercase max-w-[280px] leading-relaxed">
            SALÓN GRAN QUINTA
            <br />
            <span className="text-gold">| 9:00 P.M. |</span>
          </p>
          
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 border border-gold/30 hover:border-gold text-white/90 hover:text-white font-cinzel text-[10px] tracking-[0.2em] uppercase rounded-md bg-[#030a16]/30 hover:bg-[#030a16]/60 cursor-pointer mt-4 transition-all duration-300"
          >
            📍 IR AL MAPA
          </a>
        </motion.div>

      </div>
    </section>
  );
}


