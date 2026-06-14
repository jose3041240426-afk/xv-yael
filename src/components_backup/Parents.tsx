import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Parents() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 bg-[#040c1c] text-center" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className="font-sans font-light text-gray-300 text-sm md:text-base uppercase tracking-widest mb-16"
        >
          Con la bendición de Dios y el amor de nuestros padres
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-8 mb-20 relative">
          {/* Subtle divider for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent"></div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-gold font-serif text-2xl mb-4 italic">Mis Padres</p>
            <p className="text-white font-sans text-xl font-light mb-2">Arizett Inés López C.</p>
            <p className="text-white font-sans text-xl font-light">Jesús Iván Medina C.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-gold font-serif text-2xl mb-4 italic">Mis Padrinos</p>
            <p className="text-white font-sans text-xl font-light mb-2">Alejandra Maythe López C.</p>
            <p className="text-white font-sans text-xl font-light">Misael González Díaz</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
