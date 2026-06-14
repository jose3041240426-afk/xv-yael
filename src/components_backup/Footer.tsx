import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="h-[70vh] bg-[#040c1c] flex flex-col items-center justify-center relative overflow-hidden" ref={ref}>
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy/30 via-[#040c1c] to-[#040c1c]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h2 className="font-serif text-5xl md:text-7xl text-gradient-gold mb-8">
          ¡Te esperamos!
        </h2>
        <p className="font-sans font-light text-xl text-gray-300 tracking-widest uppercase">
          Yael Alejandro
        </p>
      </motion.div>

      {/* Confetti particles */}
      {inView && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gold"
              style={{
                width: Math.random() * 8 + 4 + 'px',
                height: Math.random() * 15 + 5 + 'px',
                left: Math.random() * 100 + '%',
                top: -20,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                y: ['0vh', '100vh'],
                rotate: [0, 360],
                opacity: [1, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
