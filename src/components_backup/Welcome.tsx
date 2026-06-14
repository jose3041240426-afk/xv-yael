import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Welcome() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-32 px-6 md:px-10 bg-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-navy/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <div className="w-1 h-20 bg-gradient-to-b from-transparent via-gold to-transparent mx-auto mb-10 opacity-50"></div>
        
        <p className="font-serif text-2xl md:text-4xl lg:text-5xl leading-relaxed text-gray-200 font-light">
          "Hay momentos que solo ocurren una vez en la vida y sería un honor compartirlos contigo."
        </p>

        <div className="w-1 h-20 bg-gradient-to-b from-transparent via-gold to-transparent mx-auto mt-10 opacity-50"></div>
      </motion.div>
    </section>
  );
}
