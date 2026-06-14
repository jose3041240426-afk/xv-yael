import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Parents() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 md:py-32 bg-black" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-sans font-light text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] mb-16"
        >
          Con la bendición de Dios y el amor de nuestros padres
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-12 relative">
          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-gold font-serif text-lg mb-5 tracking-wide">Mis Padres</p>
            <p className="text-white font-sans text-lg font-light mb-1">Arizett Inés López C.</p>
            <p className="text-white font-sans text-lg font-light">Jesús Iván Medina C.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gold font-serif text-lg mb-5 tracking-wide">Mis Padrinos</p>
            <p className="text-white font-sans text-lg font-light mb-1">Alejandra Maythe López C.</p>
            <p className="text-white font-sans text-lg font-light">Misael González Díaz</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
