import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section ref={ref} className="h-[65vh] bg-black flex flex-col items-center justify-center relative overflow-hidden select-none">
      
      {/* Background navy light glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(8,26,58,0.2)_0%,_rgba(0,0,0,1)_100%)]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        {/* Subtle gold line */}
        <div className="w-12 h-px bg-gold/30 my-4" />

        <p className="font-cinzel text-xs md:text-sm text-white/70 tracking-[0.3em] uppercase">
          Yael Alejandro
        </p>
      </motion.div>

      {/* Luxury golden glitter rain */}
      {inView && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-b from-gold-light to-gold-dark rounded-full"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: -10,
                boxShadow: '0 0 4px rgba(212, 175, 55, 0.4)',
              }}
              animate={{
                y: ['0vh', '100vh'],
                opacity: [0, 0.8, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 6 + 6,
                ease: "linear",
                delay: Math.random() * 3,
                repeat: Infinity
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}

